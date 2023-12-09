const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const BookOfTheWeekRouter = require("./routes/bookOfTheWeek");
const reviewRouter = require("./routes/review");
const bookRouter = require("./routes/book");
const categoriesRouter = require("./routes/categoryRoutes");
const mongoose = require("./config/dbConfig");
const faqRouter = require("./routes/faqRoutes");
const userRouter = require("./routes/usersRoutes");
const cors = require("cors");
const literarySparksRoutes = require("./routes/literarySparksRoutes");
const upcomingEvents = require("./routes/upcomingEvents");
const cron = require("node-cron");
const { updateLiterarySparksData } = require("./cron/literaryCron");

app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

cron.schedule("35 20 * * *", updateLiterarySparksData);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/api/bookOfTheWeek", BookOfTheWeekRouter);
app.use("/api/review", reviewRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/books", bookRouter);
app.use("/api/faq", faqRouter);
app.use("/api/users", userRouter);
app.use("/api/literarysparks", literarySparksRoutes);
app.use("/api/upcomingevents", upcomingEvents);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
  updateLiterarySparksData();
});
