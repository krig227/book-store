const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  bookId: {
    type: String,
    ref: "Book",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  recommended: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: String,
    ref: "User", // Reference to the User model
  },
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User", // Reference to the User model
  // },
});

const Review = mongoose.model("Review", reviewSchema, "reviews");

module.exports = Review;
