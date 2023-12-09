const express = require("express");
const faqController = require("../controllers/faqController");

const router = express.Router();

router.get("/category/:category", faqController.getQuestionsByCategory);
router.get("/all", faqController.getAllQuestions);
router.patch("/rate/:qId", faqController.rateQuestion);
router.post("/add", faqController.addQuestion);

module.exports = router;
