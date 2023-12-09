const bookService = require("../services/Book");
const { v4: uuidv4 } = require("uuid");

const getBookOfTheWeek = async (req, res) => {
  try {
    const book = await bookService.getBookOfTheWeek();
    if (!book) {
      res.status(404).json({ error: "No book of the week found" });
    } else {
      res.json({
        title: book.title,
        description: book.description,
        coverImage: book.coverImage,
        author: book.author,
        discountPercentage: book.discountPercentage,
        isBookOfTheWeek: book.isBookOfTheWeek,
        genre: book.genre,
        publishedDate: book.publishedDate,
        language: book.language,
        viewCount: book.viewCount,
        isTopPick: book.isTopPick,
        price: book.price,
        authorInfo: book.authorInfo,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createBook = async (req, res) => {
  try {
    const {
      title,
      description,
      coverImage,
      author,
      discountPercentage,
      isBookOfTheWeek,
      genre,
      publishedDate,
      viewCount,
      language,
      isTopPick,
      price,
      authorInfo,
    } = req.body;
    const hyphenedTitle = title.replace(/ /g, "-");
    const shortUUID = uuidv4().replace(/-/g, "").substring(0, 8);
    const bookId = `${shortUUID}-${hyphenedTitle}`;

    const book = await bookService.createBook({
      bookId,
      title,
      description,
      coverImage,
      author,
      discountPercentage,
      isBookOfTheWeek,
      genre,
      publishedDate,
      language,
      viewCount,
      isTopPick,
      price,
      authorInfo,
    });
    res.status(201).json({ message: "New book created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

async function viewBook(req, res) {
  const { bookId } = req.params;

  try {
    const book = await bookService.increaseViewCount(bookId);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAllBooks(req, res) {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Error fetching books" });
  }
}

async function getBook(req, res) {
  try {
    const { bookId } = req.params;
    const books = await bookService.getBookById(bookId);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  getBookOfTheWeek,
  createBook,
  viewBook,
  getAllBooks,
  getBook,
};
