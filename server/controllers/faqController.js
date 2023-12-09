const faqService = require("../services/faqService");
const { v4: uuidv4 } = require("uuid");

async function getQuestionsByCategory(req, res) {
  const { category } = req.params;

  try {
    const questions = await faqService.getQuestionsByCategory(category);
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAllQuestions(req, res) {
  try {
    const questions = await faqService.getAllQuestions();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function rateQuestion(req, res) {
  const { qId } = req.params;
  const { rating } = req.body;
  try {
    const question = await faqService.rateQuestion(qId, rating);
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function addQuestion(req, res) {
  try {
    const { category, question, answer } = req.body;
    const qId = uuidv4();
    const ratings = [];
    const aggregateRating = 0;

    const newQuestion = await faqService.addQuestion({
      qId,
      category,
      question,
      answer,
      ratings,
      aggregateRating,
    });
    console.log(newQuestion);
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getQuestionsByCategory,
  rateQuestion,
  addQuestion,
  getAllQuestions,
};
