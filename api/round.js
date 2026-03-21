const { getRoundByLevel, serializeRound } = require("./_lib/rounds");
const { applyRateLimit, createRoundToken } = require("./_lib/security");

module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!applyRateLimit(req, res, "round", 90)) {
    return;
  }

  const runLength = Number(process.env.GEOSTREAK_RUN_LENGTH || 10);
  const round = getRoundByLevel(req.query.level, runLength);
  res.status(200).json({
    ...serializeRound(round),
    token: createRoundToken(round, 1)
  });
};
