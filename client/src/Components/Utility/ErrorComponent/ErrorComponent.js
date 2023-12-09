import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <div
      style={{ color: "#f9f9f9", marginTop: "0.25rem", marginLeft: "0.5rem" }}
    >
      {message && <p>{message}</p>}
    </div>
  );
};

export default ErrorComponent;
