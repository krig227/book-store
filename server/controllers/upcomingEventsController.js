const upcomingEventService = require("../services/upcomingEventServices");

const getUpcomingEvents = async (req, res) => {
  try {
    const upcomingEvents = await upcomingEventService.getUpcomingEvents();
    res.status(200).json(upcomingEvents);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const allEvents = await upcomingEventService.getAllEvents();
    res.status(200).json(allEvents);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getUpcomingEvents,
  getAllEvents,
};
