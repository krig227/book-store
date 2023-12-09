const reviewService = require("../services/reviewService");
const userService = require("../services/userService");

const createReview = async (req, res) => {
  const { bookId, text, rating, heading, recommended } = req.body;
  const userId = req.user.userId;
  const { username } = await userService.getUserById(req.user.userId);
  try {
    const review = await reviewService.createReview(
      bookId,
      {
        text,
        rating,
        recommended,
        heading,
      },
      username
    );
    res.status(201).json({ message: "Review created successfully", review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getReviewsForBook = async (req, res) => {
  const { bookId } = req.params;

  try {
    const reviews = await reviewService.getReviewsForBook(bookId);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

async function getReviewStats(req, res) {
  const { bookId } = req.params;

  try {
    const reviewStats = await reviewService.getReviewStats(bookId);
    res.json(reviewStats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  createReview,
  getReviewsForBook,
  getReviewStats,
};
