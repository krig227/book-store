import React, { useState, useEffect } from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import { ChevronLeft } from "../../../Icons/Icon";

const CustomCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    // <BrowserRouter>
    <div className="custom-carousel-container">
      <div className="carousel-content">
        <Link>
          <img
            className="Img-Carousel"
            src={images[currentSlide]}
            alt={`img ${currentSlide + 1}`}
          />
        </Link>
      </div>
      <div className="carousel-controls">
        <button className="Left-Button" onClick={prevSlide}>
          <ChevronLeft />
        </button>
        <button className="Right-Button" onClick={nextSlide}>
          <ChevronLeft />
        </button>
      </div>
    </div>
    // </BrowserRouter>
  );
};

export default CustomCarousel;
