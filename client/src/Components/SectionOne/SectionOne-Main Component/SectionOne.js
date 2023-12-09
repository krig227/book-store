import React from "react";
import "./Index.css";
import DiscountBanner from "../DiscountBanner/DiscountBanner";
import LiterarySparks from "../LiterarySparks/LiterarySparks";
import CustomCarousel from "../carouselComponent/CustomCarousel";
import Carousel from "../categoryCarousel/CarouselCategory";
import Minicart from "../../MiniCart/Minicart";

const SectionOne = () => {
  const images = [
    "http://drive.google.com/uc?export=view&id=1Y4dUDnUJEdeLfz526ZGCmqr-G8X8Vt5n",
    "http://drive.google.com/uc?export=view&id=1kv8JQQDvVgfwm51lOlAGrsTvIrdc5JG7",
    "http://drive.google.com/uc?export=view&id=1D1c64Ea6bQkzDL7VFgMAmWfb5U50ZKny",
    "http://drive.google.com/uc?export=view&id=1mpPSS9P47ufDD6bNw0F6Y9luDoOtmyj0",
    // Add more image URLs as needed
  ];

  return (
    <section>
      <div className="SectionOne-Container">
        <DiscountBanner />
        <LiterarySparks />
        <CustomCarousel images={images} />
        <Carousel
          apiEnd="http://localhost:8080/api/categories/trending"
          catName="Trending"
        />
      </div>
    </section>
  );
};

export default SectionOne;
