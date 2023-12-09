import React from "react";
import "./Index.css";
import Book from "../Book/Book";
import { useEffect, useState } from "react";
import { ChevronRight } from "../../../Icons/Icon";
import { Link } from "react-router-dom";

const CarouselCategory = ({ apiEnd, catName }) => {
  const booksPerPage = 3;
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Replace 'your_api_url_here' with the actual API URL
    fetch(apiEnd)
      .then((response) => response.json())
      .then((data) => setBooks(data))

      .catch((error) => console.error("Error fetching data:", error));
  }, [apiEnd]);

  const nextBooks = () => {
    if (currentPage < Math.ceil(books.length / booksPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevBooks = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startBookIndex = currentPage * booksPerPage;
  const endBookIndex = startBookIndex + booksPerPage;
  const displayedBooks = books.slice(startBookIndex, endBookIndex);

  const catNameFormatted = catName.replace(/\s+/g, "").toLowerCase();

  return (
    <div className="Category-Container">
      <div className="Category-Header">
        <h2>{catName}</h2>
        <Link to={`/books/${catNameFormatted}`}>
          <button className="Secondary-Button">See More</button>
        </Link>
      </div>
      <button
        className="PrevButton"
        onClick={prevBooks}
        disabled={currentPage === 0}
      >
        <ChevronRight />
      </button>

      <div className="Books-Carousel-Container">
        {displayedBooks.map((book, index) => (
          <Book
            key={book.bookId}
            book={book}
            index={startBookIndex + index + 1}
          />
        ))}
      </div>

      <button
        className="NextButton"
        onClick={nextBooks}
        disabled={currentPage === Math.ceil(books.length / booksPerPage) - 1}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default CarouselCategory;
