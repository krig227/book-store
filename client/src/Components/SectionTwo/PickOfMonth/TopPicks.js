import React, { useState, useEffect } from "react";
import "./Index.css";
import { Link } from "react-router-dom";

const TopPicks = () => {
  const [books, setBooks] = useState([]);

  const apiUrl =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_API_URL
      : process.env.REACT_APP_PROD_API_URL;

  useEffect(() => {
    // Fetch data from your API
    fetch(`${apiUrl}/categories/toppicksofthemonth`)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const bookRows = chunkArray(books, 5);

  return (
    // <BrowserRouter>
    <div className="TopPicks-Container">
      <div className="TopPicks-Header">
        <h3>Top Picks Of The Month</h3>
      </div>
      <div className="brick-wall-container">
        {bookRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`book-row ${
              (rowIndex + 1) % 2 === 0 ? "Even-Row" : "Odd-Row"
            }`}
          >
            {row.map((book, bookIndex) => (
              <div
                key={bookIndex}
                className={`book ${
                  (rowIndex + 1) % 2 === 0 ? "rotate-45" : "rotate-minus-45"
                }`}
              >
                <Link to={`/book/${book.bookId}`}>
                  <img
                    className="Cover-Image-Top"
                    src={book.coverImage}
                    alt="cover-pic"
                  />
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    // </BrowserRouter>
  );
};

export default TopPicks;
