const crypto = require("crypto");

const TOKEN_SECRET = process.env.GEOSTREAK_TOKEN_SECRET || "dev-token-secret-change-me";
const RATE_LIMIT = new Map();
const IS_PRODUCTION =
  process.env.NODE_ENV === "production" ||
  process.env.VERCEL_ENV === "production" ||
  process.env.VERCEL === "1";

if (IS_PRODUCTION && (!process.env.GEOSTREAK_TOKEN_SECRET || process.env.GEOSTREAK_TOKEN_SECRET === "dev-token-secret-change-me")) {
  throw new Error("GEOSTREAK_TOKEN_SECRET must be set in production");
}

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function signPayload(payload) {
  const encoded = base64url(JSON.stringify(payload));
  const signature = crypto.createHmac("sha256", TOKEN_SECRET).update(encoded).digest("base64url");
  return `${encoded}.${signature}`;
}

function verifyToken(token) {
  if (!token || typeof token !== "string" || !token.includes(".")) {
    return null;
  }

  const [encoded, signature] = token.split(".");
  const expected = crypto.createHmac("sha256", TOKEN_SECRET).update(encoded).digest("base64url");
  if (signature !== expected) {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8"));
    if (payload.exp && Date.now() > payload.exp) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}

function createRoundToken(round, visibleClueCount = 1) {
  return signPayload({
    roundId: round.id,
    level: round.level,
    visibleClueCount,
    used: false,
    exp: Date.now() + 1000 * 60 * 10
  });
}

function issueRevealToken(previousPayload) {
  return signPayload({
    ...previousPayload,
    visibleClueCount: previousPayload.visibleClueCount + 1,
    used: false,
    exp: Date.now() + 1000 * 60 * 10
  });
}

function consumeGuessToken(previousPayload) {
  return signPayload({
    ...previousPayload,
    used: true,
    exp: Date.now() + 1000 * 60 * 2
  });
}

function applyRateLimit(req, res, keyPrefix, limit = 60, windowMs = 60_000) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
  const key = `${keyPrefix}:${ip}`;
  const now = Date.now();
  const current = RATE_LIMIT.get(key) || { count: 0, resetAt: now + windowMs };

  if (now > current.resetAt) {
    current.count = 0;
    current.resetAt = now + windowMs;
  }

  current.count += 1;
  RATE_LIMIT.set(key, current);

  if (current.count > limit) {
    res.status(429).json({ error: "Too many requests" });
    return false;
  }

  return true;
}

module.exports = {
  applyRateLimit,
  consumeGuessToken,
  createRoundToken,
  issueRevealToken,
  verifyToken
};
