import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Index.css";

const BookListing = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [reviews, setReviews] = useState({});

  const generateStars = (rating) => {
    const filledStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return filledStars + emptyStars;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiEndpoint = "";

        switch (category) {
          case "newarrivals":
            apiEndpoint = "http://localhost:8080/api/categories/newarrivals";
            break;
          case "all-books":
            apiEndpoint = "API_ENDPOINT_FOR_ALL_BOOKS";
            break;

          case "trending":
            apiEndpoint = "http://localhost:8080/api/categories/trending";
            break;

          default:
            const languages = [
              "English",
              "Tamil",
              "Hindi",
              "Bengali",
              "Kannada",
              "Malayalam",
              "Telugu",
              "Others",
            ];
            if (languages.includes(category)) {
              apiEndpoint = `http://localhost:8080/api/categories/language?language=${category}`;
            } else {
              apiEndpoint = `http://localhost:8080/api/categories/genre?selectedGenre=${category}`;
            }
            break;
        }

        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setData(data);
        const reviewsPromises = data.map(async (book) => {
          const responseReviews = await fetch(
            `http://localhost:8080/api/review/book/${book.bookId}`
          );
          const reviewsData = await responseReviews.json();
          return { [book.bookId]: reviewsData };
        });
        const reviewsResults = await Promise.all(reviewsPromises);
        const allReviews = reviewsResults.reduce((acc, reviewsObj) => {
          const bookId = Object.keys(reviewsObj)[0];
          const bookReviews = reviewsObj[bookId];
          const totalReviews = bookReviews.length; // Calculate total reviews
          acc[bookId] = { reviews: bookReviews, totalReviews };
          return acc;
        }, {});

        setReviews(allReviews);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]); // Run when the category changes

  return (
    <section className="Booklisting-Main">
      {data.map((book, index) => (
        <Link className="Booklisting-Link" to={`/book/${book.bookId}`}>
          <div className="Booklist-Container" key={book.bookId}>
            <div className="Img-Container">
              <img
                src={book.coverImage}
                alt="book-cover"
                className="Booklist-Cover"
              />
            </div>
            <div className="Booklist-Right">
              <div className="Booklist-Title">{book.title}</div>
              <div className="Booklist-author">{book.author}</div>
              <div className="Booklist-Price">₹ {book.price}</div>
              <div>
                <div className="Booklist-Rating">
                  Rating:
                  {generateStars(reviews[book.bookId]?.reviews[0]?.rating) ||
                    "N/A"}
                </div>
                <div className="Booklist-Reviews">
                  {reviews[book.bookId]?.totalReviews || "N/A"}{" "}
                  {reviews[book.bookId]?.totalReviews > 1
                    ? " Reviews"
                    : " Review"}
                </div>
              </div>
            </div>
            <div className="Booklist-Button-Container">
              <button className="Quickview-Button">Quick View</button>
            </div>
          </div>
        </Link>
      ))}
      ;
    </section>
  );
};

export default BookListing;
