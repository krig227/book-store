import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Actions/cartAction";

const Book = (book, index) => {
  const dispatch = useDispatch();
  if (!book) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <div className="Book-Container">
        <Link to={`/book/${book.book.bookId}`}>
          <div className="Book-Image">
            <img
              src={book.book.coverImage}
              className="Cover-Image"
              alt="cover-pic"
            />
          </div>
          <div className="Book-Details">
            <h3>{book.book.title}</h3>
            <h3>
              By <span>{book.book.author}</span>
            </h3>
            {book.book.genre?.map((genre, genreIndex) => (
              <button className="Genre-Button" key={genreIndex}>
                {genre}
              </button>
            ))}
            <h3>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(book.book.price)}
            </h3>
            <h4>#{book.index} Trending</h4>
          </div>
        </Link>
        <button className="AddToCart-Button" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </div>
      {/* </BrowserRouter> */}
    </>
  );
};

export default Book;
