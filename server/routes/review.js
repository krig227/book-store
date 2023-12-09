const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const verifyToken = require("../middleware/verifyToken");

router.post("/add", verifyToken, reviewController.createReview);
router.get("/book/:bookId", reviewController.getReviewsForBook);
router.get("/stats/:bookId", reviewController.getReviewStats);

module.exports = router;
