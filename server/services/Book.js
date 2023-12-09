const Book = require("../model/bookOfTheWeek");

const getBookOfTheWeek = async () => {
  try {
    const book = await Book.findOne({ isBookOfTheWeek: true }).exec();
    return book;
  } catch (error) {
    throw error;
  }
};

const createBook = async (bookData) => {
  const newBook = new Book(bookData);
  await newBook.save();
  return newBook;
};

async function increaseViewCount(bookId) {
  try {
    const book = await Book.findOne({ bookId: bookId });
    if (!book) {
      throw new Error("Book not found");
    }
    // Increment the viewCount field by 1
    book.viewCount += 1;
    // Save the updated book document
    await book.save();

    return book;
  } catch (error) {
    throw error;
  }
}

getAllBooks = async () => {
  try {
    const books = await Book.find();
    return books;
  } catch (err) {
    throw new Error("Error fetching books");
  }
};

getBookById = async (Id) => {
  try {
    const books = await Book.findOne({ bookId: Id });
    return books;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getBookOfTheWeek,
  createBook,
  increaseViewCount,
  getAllBooks,
  getBookById,
};
