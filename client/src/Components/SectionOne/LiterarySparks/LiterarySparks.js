import "./Index.css";
import React, { useState, useEffect } from "react";

const LiterarySparks = () => {
  const [data, setData] = useState({});
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_API_URL
      : process.env.REACT_APP_PROD_API_URL;

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    fetch(`${apiUrl}/literarysparks`, { signal })
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
  }, [apiUrl]);

  return (
    <div
      className="Literary-Container"
      style={{ backgroundImage: `url(${data.imageURL})` }}
    >
      <div className="Literary-Header">
        <h3>Literary Sparks</h3>
      </div>
      {/* <img
        className="Background-Cover"
        src={image}
        alt="background-cover"
      ></img> */}
      <h4 className="Literary-Quote">{data.quotes}</h4>

      <h5 className="Literary-Book">{data.bookName}</h5>
      <h6 className="Literary-Author">{data.author}</h6>
    </div>
  );
};

export default LiterarySparks;
