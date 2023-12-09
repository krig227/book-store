import React from "react";
import "./Index.css";
import TopPicks from "../PickOfMonth/TopPicks";
import Carousel from "../../SectionOne/categoryCarousel/CarouselCategory";
import FAQ from "../FAQAccordion/FAQAccordion";
import ExploreComponent from "../ExploreComponent/ExploreComponent";
import ExploreExam from "../ExploreByExam/ExploreExam";
import GenreQuest from "../GenreQuest/GenreQuest";
import Faqtheme from "../FaqTheme/Faqtheme";

const SectionTwo = () => {
  return (
    <>
      <section>
        <div className="Section-Two">
          <TopPicks />
          <Carousel
            apiEnd="http://localhost:8080/api/categories/newArrivals"
            catName="New Arrivals"
          />
          <FAQ />
          <ExploreComponent />
          <ExploreExam />
          <GenreQuest />
          <Faqtheme />
        </div>
      </section>
    </>
  );
};

export default SectionTwo;
