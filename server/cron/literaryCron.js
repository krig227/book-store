const LiterarySpark = require("../model/literarySparks");

let previousData = null;
let currentData = {};

async function updateLiterarySparksData() {
  try {
    // Use MongoDB aggregation to fetch a random literary spark
    const newLiterarySpark = await LiterarySpark.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0 } },
    ]);

    // Set the new data as the current data
    currentData = newLiterarySpark[0];

    if (JSON.stringify(currentData) === JSON.stringify(previousData)) {
      // If it's the same, refetch the data until it's different
      while (JSON.stringify(currentData) === JSON.stringify(previousData)) {
        newLiterarySpark = await LiterarySpark.aggregate([
          { $sample: { size: 1 } },
        ]);
        currentData = newLiterarySpark[0];
      }
    }

    previousData = currentData;

    console.log("Updated literary sparks data.", currentData);
  } catch (error) {
    console.error("Error updating literary sparks data:", error);
  }
}

module.exports = {
  updateLiterarySparksData,
  getCurrentData: () => currentData,
};
