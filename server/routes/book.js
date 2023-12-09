const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book");

router.get("/", bookController.getAllBooks);
router.get("/:bookId", bookController.getBook);
router.post("/createbook", bookController.createBook);
router.post("/view/:bookId", bookController.viewBook);

module.exports = router;
