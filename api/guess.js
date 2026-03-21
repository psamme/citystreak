const { COUNTRY_ROUNDS } = require("./_lib/rounds");
const { applyRateLimit, consumeGuessToken, verifyToken } = require("./_lib/security");

const COUNTRY_ALIASES = {
  japan: "Japan",
  italy: "Italy",
  brazil: "Brazil",
  turkey: "Turkey",
  turkiye: "Turkey",
  morocco: "Morocco",
  romania: "Romania",
  kazakhstan: "Kazakhstan",
  cambodia: "Cambodia",
  kyrgyzstan: "Kyrgyzstan",
  "kyrgyz republic": "Kyrgyzstan",
  moldova: "Moldova",
  "republic of moldova": "Moldova",
  laos: "Laos",
  "lao pdr": "Laos",
  "burkina faso": "Burkina Faso",
  uzbekistan: "Uzbekistan",
  namibia: "Namibia",
  tajikistan: "Tajikistan",
  albania: "Albania"
};

function normalizeName(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z\s]/g, " ")
    .replace(/\s+/g, " ");
}

function canonicalCountry(value) {
  const normalized = normalizeName(value);
  return COUNTRY_ALIASES[normalized] || normalized.replace(/\b\w/g, (char) => char.toUpperCase());
}

module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!applyRateLimit(req, res, "guess", 120)) {
    return;
  }

  const { roundId, guess, token } = req.body || {};
  const payload = verifyToken(token);
  if (!payload || payload.used || payload.roundId !== roundId) {
    res.status(400).json({ error: "Invalid or expired round token" });
    return;
  }

  const round = COUNTRY_ROUNDS.find((entry) => entry.id === roundId);

  if (!round) {
    res.status(400).json({ error: "Invalid round" });
    return;
  }

  const correct = canonicalCountry(guess) === round.country;
  res.status(200).json({
    correct,
    country: round.country,
    code: round.code,
    level: round.level,
    tier: round.tier,
    token: consumeGuessToken(payload)
  });
};
