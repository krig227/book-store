import React, { useState, useEffect } from "react";
import "./Index.css";

const DiscountBanner = () => {
  const [data, setData] = useState({});

  const apiUrl =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_API_URL
      : process.env.REACT_APP_PROD_API_URL;

  useEffect(() => {
    console.log(apiUrl);
    const abortController = new AbortController();
    const { signal } = abortController;

    fetch(`${apiUrl}/bookOfTheWeek`, { signal })
      .then((response) => response.json())
      .then((apiData) => {
        setData(apiData);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Request was aborted"); // Handle aborted request
        } else {
          console.error("Error fetching data:", error);
        }
      });
    return () => {
      abortController.abort(); // Abort the request when the component unmounts
    };
  }, []);

  return (
    <div className="Discount-Banner">
      <div className="Discount-Percentage">
        <h3>{data.discountPercentage} Off</h3>
      </div>
      <img className="Image-Cover" src={data.coverImage} alt="Book-Cover" />
      <div className="Title-Author">
        <h2>{data.title}</h2>
        <h3 className="Italics-Author">{data.author}</h3>
      </div>
      <div className="Button-Container">
        <button className="Primary-Btn">Buy Now</button>
      </div>
    </div>
  );
};

export default DiscountBanner;
