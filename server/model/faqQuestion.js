const mongoose = require("mongoose");

const faqQuestionSchema = new mongoose.Schema({
  qId: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  ratings: [{ type: Number }],
  aggregateRating: Number,
});

module.exports = mongoose.model(
  "FaqQuestion",
  faqQuestionSchema,
  "frequentlyAskedQuestions"
);
