module.exports = function handler(_req, res) {
  res.status(200).json({
    runLength: Number(process.env.GEOSTREAK_RUN_LENGTH || 10)
  });
};
