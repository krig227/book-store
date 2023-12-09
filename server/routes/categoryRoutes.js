const express = require("express");
const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.get("/newarrivals", categoryController.getNewArrivals);
router.get("/trending", categoryController.getTrending);
router.get("/language", categoryController.getLanguage);
router.get("/genre", categoryController.getSelectedGenre);
router.get("/toppicksofthemonth", categoryController.getTopPicksOfTheMonth);

module.exports = router;
