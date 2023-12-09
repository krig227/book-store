const FaqQuestion = require("../model/faqQuestion");

async function getQuestionsByCategory(category) {
  return await FaqQuestion.find({ category });
}

async function getAllQuestions() {
  return await FaqQuestion.find();
}

async function rateQuestion(id, rating) {
  const question = await FaqQuestion.findOne({ qId: id });
  if (!question) {
    throw new Error("Question not found");
  }
  question.ratings.push(rating);
  await question.save();
  const totalRatings = question.ratings.length;
  const totalRatingValue = question.ratings.reduce((a, b) => a + b, 0);

  question.aggregateRating =
    totalRatings > 0 ? totalRatingValue / totalRatings : 0;
  return question;
}

async function addQuestion(faqData) {
  console.log(faqData);
  const newQuestion = new FaqQuestion(faqData);
  await newQuestion.save();
  return newQuestion;
}

module.exports = {
  getQuestionsByCategory,
  rateQuestion,
  addQuestion,
  getAllQuestions,
};
