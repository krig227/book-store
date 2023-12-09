const express = require("express");
const literarySparksController = require("../controllers/literarySparksController");

const router = express.Router();

router.get("/", literarySparksController.getCurrentLiterarySpark);

module.exports = router;
