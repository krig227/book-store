import React from "react";

const StarRating = ({ rating }) => {
  const filledStars = "★".repeat(rating);
  const emptyStars = "☆".repeat(5 - rating);

  return (
    <div>
      {filledStars}
      {emptyStars}
    </div>
  );
};

export default StarRating;
