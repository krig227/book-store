const mongoose = require("mongoose");

const upcomingEventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  expireAt: { type: Date, index: { expires: 0 } },
});

const Event = mongoose.model("Event", upcomingEventSchema, "upcomingEvent");

module.exports = Event;
