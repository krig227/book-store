const express = require("express");
const upcomingeventController = require("../controllers/upcomingEventsController");

const router = express.Router();

router.get("/upcoming", upcomingeventController.getUpcomingEvents);
router.get("/allevents", upcomingeventController.getAllEvents);

module.exports = router;
