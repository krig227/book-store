const { getCurrentData } = require("../cron/literaryCron");

function getCurrentLiterarySpark(req, res) {
  const currentData = getCurrentData();
  console.log(currentData);
  res.status(200).json(currentData);
}

module.exports = {
  getCurrentLiterarySpark,
};
