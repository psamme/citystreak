const { COUNTRY_ROUNDS, serializeRound } = require("./_lib/rounds");
const { applyRateLimit, issueRevealToken, verifyToken } = require("./_lib/security");

module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!applyRateLimit(req, res, "reveal", 120)) {
    return;
  }

  const { roundId, token } = req.body || {};
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

  if (payload.visibleClueCount >= round.cities.length) {
    res.status(400).json({ error: "All clues already revealed" });
    return;
  }

  const nextVisibleClueCount = payload.visibleClueCount + 1;
  const serialized = serializeRound(round, nextVisibleClueCount);
  res.status(200).json({
    visibleClueCount: nextVisibleClueCount,
    clues: serialized.clues,
    totalClueCount: serialized.totalClueCount,
    token: issueRevealToken(payload)
  });
};
