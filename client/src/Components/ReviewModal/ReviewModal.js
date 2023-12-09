import { useState } from "react";
import { useParams } from "react-router-dom";
import "./Index.css";
import ErrorComponent from "../Utility/ErrorComponent/ErrorComponent";

const ReviewModal = ({ isOpen, onClose, onSubmit, loggedIn }) => {
  const [rating, setRating] = useState(1);
  const [heading, setReviewHeading] = useState("");
  const [recommended, setRecommended] = useState("Yes");
  const [text, setReviewText] = useState("");
  const { bookId } = useParams();
  const [fieldErrors, setFieldErrors] = useState({});

  const handleSubmit = () => {
    // Validate and submit the review
    const errors = {};
    if (!text) {
      errors.text = "Please enter the review text.";
    }
    if (!heading) {
      errors.heading = "Please enter a heading.";
    }
    // Add more validations as needed

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    // Clear errors if there are no validation issues
    setFieldErrors({});
    onSubmit({
      rating,
      heading,
      recommended,
      text,
      bookId,
    });
    // Close the modal
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="Modal-Header">
          <h2>Write a Review</h2>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>

        {loggedIn ? (
          <form className="Form-Container">
            <label>
              <div className="Label-Text">Rating:</div>
              <select
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value, 10))}
              >
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <div className="Label-Text">Heading:</div>
              <div className="Input-Error-Container">
                <input
                  type="text"
                  value={heading}
                  onChange={(e) => setReviewHeading(e.target.value)}
                />
                <ErrorComponent message={fieldErrors.heading} />
              </div>
            </label>
            <label>
              <div className="Label-Text">Recommended:</div>
              <select
                value={recommended}
                onChange={(e) => setRecommended(e.target.value)}
              >
                {["Yes", "No"].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <div className="Label-Text">Review Text:</div>
              <div className="Input-Error-Container">
                <textarea
                  value={text}
                  onChange={(e) => setReviewText(e.target.value)}
                />
                <ErrorComponent message={fieldErrors.text} />
              </div>
            </label>
            <button
              className="Button-Review"
              type="button"
              onClick={handleSubmit}
            >
              Submit Review
            </button>
          </form>
        ) : (
          <p>Please log in to write a review.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewModal;
