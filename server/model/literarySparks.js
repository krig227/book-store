const mongoose = require("mongoose");

const literarySparkSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  quotes: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});

const LiterarySpark = mongoose.model(
  "LiterarySpark",
  literarySparkSchema,
  "literarySparks"
);

module.exports = LiterarySpark;
