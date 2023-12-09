const Event = require("../model/upcomingEventModel");

const getUpcomingEvents = async () => {
  try {
    const currentDate = new Date();
    const upcomingEvents = await Event.find({
      date: { $gte: currentDate },
    }).limit(5);
    return upcomingEvents;
  } catch (error) {
    console.error("Error fetching upcoming events:", error);
    throw new Error("Internal Server Error");
  }
};

const getAllEvents = async () => {
  try {
    return await Event.find();
  } catch (error) {
    console.error("Error fetching all events:", error);
    throw new Error("Internal Server Error");
  }
};

module.exports = {
  getUpcomingEvents,
  getAllEvents,
};
