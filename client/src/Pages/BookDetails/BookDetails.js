import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Index.css";
import ReviewModal from "../../Components/ReviewModal/ReviewModal";
import { addToCart } from "../../Actions/cartAction";

import LiterarySparks from "../../Components/SectionOne/LiterarySparks/LiterarySparks";
import StarRating from "../../Components/Utility/Star/star";
import { BorrowcartIcon, DeliverydetailsIcon } from "../../Icons/Icon";
import { useDispatch } from "react-redux";

const BookDetails = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [book, setBook] = useState({});
  const [reviews, setReviews] = useState([]);
  const [reviewstats, setReviewStats] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true); // Set to true for testing
  const dispatch = useDispatch();
  const handleSubmitReview = async (reviewData) => {
    try {
      // Check if the user is logged in
      if (!loggedIn) {
        console.log("User is not logged in. Please log in to submit a review.");
        return;
      }

      // Assuming you have a function to get the bearer token (replace with your logic)
      //   const bearerToken = await getBearerToken();
      const bearerToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTQ1ZjI1M2YxM2ZhNzViNWRhYzhkNTUiLCJpYXQiOjE3MDEwNzA0NTEsImV4cCI6MTcwMTA3MjI1MX0.YCaNZDM3ajL5ag0Jo_4O-9HHkQh-bOmuDeoTqLri7ow";

      // Make a POST request to your API with the review data and bearer token
      const response = await fetch("http://localhost:8080/api/review/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        const updatedResponse = await fetch(
          `http://localhost:8080/api/review/book/${bookId}`
        );
        const updatedData = await updatedResponse.json();

        // Update the state with the new reviews
        setReviews(updatedData);
      } else {
        console.error("Failed to submit review:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      // Handle unexpected errors
    } finally {
      // Close the modal
      handleCloseModal();
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const { bookId } = useParams();

  useEffect(() => {
    // Fetch author info
    const fetchBook = async () => {
      const response = await fetch(`http://localhost:8080/api/books/${bookId}`);
      const data = await response.json();
      setBook(data);
    };

    // Fetch reviews
    const fetchReviews = async () => {
      const response = await fetch(
        `http://localhost:8080/api/review/book/${bookId}`
      );
      const data = await response.json();
      setReviews(data);
    };

    const fetchReviewstats = async () => {
      const response = await fetch(
        `http://localhost:8080/api/review/stats/${bookId}`
      );
      const data = await response.json();
      setReviewStats(data);
    };

    fetchReviewstats();
    fetchBook();
    fetchReviews();
  }, [bookId]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="Book-Details-Container">
      <div className="Left-Details">
        <div className="Cover-Image-Details">
          <img
            className="Book-Details-Cover"
            src={book.coverImage}
            alt="cover-pic"
          />
        </div>
      </div>
      <div className="Right-Details">
        <div className="Bookdetails-Details">
          <h4 className="Book-Name-details">{book.title}</h4>
          <h5 className="Book-Author-details">By {book.author}</h5>
          <StarRating rating={reviewstats.avgRating} />
          <h6 className="Book-type-Details">Paperback</h6>
          <h6 className="Publish-Date-Details">
            Published:{" "}
            {book.publishedDate ? book.publishedDate.slice(0, 10) : "N/A"}
          </h6>
        </div>
        <div className="Booktype-Details-Container">
          <button className="Booktype-Details">
            <h4>Hardcover</h4>
            <h4>₹ {book.price}</h4>
          </button>
          <button className="Booktype-Details">
            <h4>ebook</h4>
            <h4>₹ 250 INR</h4>
          </button>
          <button className="Booktype-Details">
            <h4>Audio Book</h4>
            <h4>₹ 250 INR</h4>
          </button>
        </div>
      </div>
      <LiterarySparks />
      <div className="Ship-Details">
        <h4 className="Ship-Details-Header">Ship This Item</h4>
        <div className="Ship-Button-Container">
          <div className="Ship-Icon">
            {" "}
            <DeliverydetailsIcon />
          </div>
          <div className="Ship-Deliverydetails">
            <h4>
              FREE Delivery by Thu, August 31 - Fri, September 1 Order within
            </h4>
          </div>
          <button className="Addtocart-Primary" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
        <div className="Ship-Button-Container">
          <div className="Ship-Icon">
            <BorrowcartIcon />
          </div>
          <div className="Ship-Deliverydetails">
            <h4>Borrow your book by earliest August 31</h4>
          </div>
          <button className="Borrow-Primary">Borrow</button>
        </div>
      </div>
      <div className="Tab-Headers">
        <div
          className={`tab-header ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => handleTabClick("overview")}
        >
          Overview
        </div>
        <div
          className={`tab-header ${
            activeTab === "aboutAuthor" ? "active" : ""
          }`}
          onClick={() => handleTabClick("aboutAuthor")}
        >
          About The Author
        </div>
        <div
          className={`tab-header ${
            activeTab === "readerReview" ? "active" : ""
          }`}
          onClick={() => handleTabClick("readerReview")}
        >
          Reader Reviews
        </div>
      </div>
      <div className="Tab-Content">
        {activeTab === "aboutAuthor" && (
          <div className="Author-Info-Details">
            <p>About the Author: </p>
            <p>{book.author}</p>
            <p>{book.authorInfo || "Loading..."}</p>
          </div>
        )}

        {activeTab === "overview" && (
          <div>
            {/* Content about the book description */}
            <p>Overview:</p>
            <p>{book.description}</p>
          </div>
        )}

        {activeTab === "readerReview" && (
          <div>
            <div className="Review-Header-Details">
              <h3>REVIEWS</h3>
            </div>
            <div className="Review-Stats">
              <div className="Rating-Snapshot">
                <h3>Rating Snapshot</h3>
                <div>
                  <div className="Rating-Details-Container">
                    <h4>5</h4> <p>★</p>{" "}
                    <div className="Bar-Rating-Details"></div>
                    {reviewstats && reviewstats.ratingsCount && (
                      <div className="Rating-Details-Count">
                        {reviewstats.ratingsCount["5"] || 0}
                      </div>
                    )}
                  </div>
                  <div className="Rating-Details-Container">
                    <h4>4</h4> <p>★</p>{" "}
                    <div className="Bar-Rating-Details"></div>
                    {reviewstats && reviewstats.ratingsCount && (
                      <div className="Rating-Details-Count">
                        {reviewstats.ratingsCount["4"] || 0}
                      </div>
                    )}
                  </div>
                  <div className="Rating-Details-Container">
                    <h4>3</h4> <p>★</p>{" "}
                    <div className="Bar-Rating-Details"></div>
                    {reviewstats && reviewstats.ratingsCount && (
                      <div className="Rating-Details-Count">
                        {reviewstats.ratingsCount["3"] || 0}
                      </div>
                    )}
                  </div>
                  <div className="Rating-Details-Container">
                    <h4>2</h4> <p>★</p>{" "}
                    <div className="Bar-Rating-Details"></div>
                    {reviewstats && reviewstats.ratingsCount && (
                      <div className="Rating-Details-Count">
                        {reviewstats.ratingsCount["2"] || 0}
                      </div>
                    )}
                  </div>
                  <div className="Rating-Details-Container">
                    <h4>1</h4> <p>★</p>{" "}
                    <div className="Bar-Rating-Details"></div>
                    {reviewstats && reviewstats.ratingsCount && (
                      <div className="Rating-Details-Count">
                        {reviewstats.ratingsCount["1"] || 0}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="Rating-Snapshot">
                <h3>Average Customer Rating</h3>
                <div>
                  <div className="Average-Rating-Container">
                    <h4>Overall</h4>
                    <StarRating rating={reviewstats.avgRating} />
                    <p>{reviewstats.avgRating}</p>
                  </div>
                </div>
              </div>
              <div className="Rating-Snapshot">
                <button
                  onClick={handleOpenModal}
                  className="Review-Button-Details"
                >
                  Write Your Review
                </button>
                {isModalOpen && (
                  <ReviewModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSubmit={handleSubmitReview}
                    loggedIn={loggedIn}
                  />
                )}
              </div>
            </div>
            {reviews.length === 0 ? (
              <p>No reviews available</p>
            ) : (
              <ul>
                {reviews.map((review) => (
                  <li key={review.reviewId} className="List-Item-Review">
                    <div className="Left-Review-Details">
                      <p>{review.user}</p>
                    </div>
                    <div className="Right-Review-Details">
                      <div className="Star-Review-Details">
                        <p>
                          <StarRating rating={review.rating} />
                        </p>
                      </div>
                      <h3>{review.heading}</h3>
                      <p>{review.text}</p>
                      <h5 className="Recommended-Details">
                        Recommends this book : {review.recommended}
                      </h5>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
