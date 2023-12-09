const Review = require("../model/review");
const Book = require("../model/bookOfTheWeek");

const createReview = async (bookId, reviewData, username) => {
  const book = await Book.findOne({ bookId: bookId });

  if (!book) {
    throw new Error("Book not found");
  }
  try {
    const review = new Review({
      bookId: book.bookId,
      user: username,
      ...reviewData,
    });
    await review.save();
    return review;
  } catch (err) {
    throw new Error(err);
  }
};

const getReviewsForBook = async (bookId) => {
  try {
    const reviews = await Review.find({ bookId: bookId }).exec();
    return reviews;
  } catch (error) {
    throw error;
  }
};

async function getReviewStats(bookId) {
  try {
    const reviews = await Review.find({ bookId });
    const totalReviews = reviews.length;

    const ratingsCount = {};
    let totalRating = 0;

    reviews.forEach((review) => {
      totalRating += review.rating;

      if (ratingsCount[review.rating]) {
        ratingsCount[review.rating]++;
      } else {
        ratingsCount[review.rating] = 1;
      }
    });

    const avgRating = totalReviews > 0 ? totalRating / totalReviews : 0;

    return {
      totalReviews,
      avgRating,
      ratingsCount,
    };
  } catch (error) {
    throw new Error("Error getting review statistics");
  }
}

module.exports = {
  createReview,
  getReviewsForBook,
  getReviewStats,
};
