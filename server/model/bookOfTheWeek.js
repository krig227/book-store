const mongoose = require("mongoose");

const bookOfTheWeekSchema = new mongoose.Schema(
  {
    bookId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    discountPercentage: {
      type: String,
      required: true,
    },
    isBookOfTheWeek: {
      type: Boolean,
      default: false,
      required: true,
    },
    genre: {
      type: Array,
      required: true,
    },
    publishedDate: {
      type: Date,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    isTopPick: { type: Boolean, default: false },
    authorInfo: {
      type: String,
      required: true,
    },
  }
  // { collection: "Booklist" }
);

module.exports = mongoose.model("book", bookOfTheWeekSchema, "Booklist");
