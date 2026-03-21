const { getRoundForDate, serializeRound } = require("./_lib/rounds");
const { applyRateLimit, createRoundToken } = require("./_lib/security");

function todayDateKey() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")?.value || "0000";
  const month = parts.find((part) => part.type === "month")?.value || "01";
  const day = parts.find((part) => part.type === "day")?.value || "01";
  return `${year}-${month}-${day}`;
}

module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!applyRateLimit(req, res, "round", 90)) {
    return;
  }

  if (!req.query.dateKey) {
    res.status(400).json({ error: "dateKey is required" });
    return;
  }

  if (req.query.dateKey > todayDateKey()) {
    res.status(404).json({ error: "Round not published yet" });
    return;
  }

  const round = getRoundForDate(req.query.dateKey, req.query.roundNumber);
  res.status(200).json({
    ...serializeRound(round, 1),
    token: createRoundToken(round, 1)
  });
};
