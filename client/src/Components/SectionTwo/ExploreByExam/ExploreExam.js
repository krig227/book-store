import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import {
  MovieIcon,
  HorrorIcon,
  HistoryIcon,
  RomanceIcon,
  FantasyIcon,
  ThrillerIcon,
  EducationIcon,
  ChildrenIcon,
  TechnologyIcon,
  PictureIcon,
} from "../../../Icons/Icon";

const ExploreExam = () => {
  return (
    <div className="Explore-container-Exam">
      <div className="Explore-Header-Exam">
        <h3>Explore By Exams</h3>
      </div>
      <div className="Explore-Content-Container-Exam">
        <Link
          className="Explore-Content-Link-Exam"
          to="/books/internationalexams"
        >
          <div className="Explore-Content-Exam">
            <div className="Explore-Icon-Exam">
              <MovieIcon />
            </div>
            <div className="Explore-category-Exam">
              <h5>International Exams</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link-Exam" to="/books/management">
          <div className="Explore-Content-Exam">
            <div className="Explore-Icon-Exam">
              <HorrorIcon />
            </div>
            <div className="Explore-category-Exam">
              <h5>Management</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link-Exam" to="/books/engineering">
          <div className="Explore-Content-Exam">
            <div className="Explore-Icon-Exam">
              <PictureIcon />
            </div>
            <div className="Explore-category-Exam">
              <h5>Engineering</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link-Exam" to="/books/medical">
          <div className="Explore-Content-Exam">
            <div className="Explore-Icon-Exam">
              <FantasyIcon />
            </div>
            <div className="Explore-category-Exam">
              <h5>Medical</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link-Exam" to="/books/defence">
          <div className="Explore-Content-Exam">
            <div className="Explore-Icon-Exam">
              <EducationIcon />
            </div>
            <div className="Explore-category-Exam">
              <h5>Defence</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link-Exam" to="/books/bankinng">
          <div className="Explore-Content-Exam">
            <div className="Explore-Icon-Exam">
              <RomanceIcon />
            </div>
            <div className="Explore-category-Exam">
              <h5>Banking</h5>
            </div>
          </div>
        </Link>
        <Link
          className="Explore-Content-Link-Exam"
          to="/books/itcertifications"
        >
          <div className="Explore-Content-Exam">
            <div className="Explore-Icon-Exam">
              <HistoryIcon />
            </div>
            <div className="Explore-category-Exam">
              <h5>IT Certifications</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link-Exam" to="/books/law">
          <div className="Explore-Content-Exam">
            <div className="Explore-Icon">
              <ChildrenIcon />
            </div>
            <div className="Explore-category-Exam">
              <h5>Law</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link-Exam" to="/books/governmentexams">
          <div className="Explore-Content-Exam">
            <div className="Explore-Icon-Exam">
              <ThrillerIcon />
            </div>
            <div className="Explore-category-Exam">
              <h5>Govt Exams</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link-Exam" to="/books/finance">
          <div className="Explore-Content-Exam">
            <div className="Explore-Icon-Exam">
              <TechnologyIcon />
            </div>
            <div className="Explore-category-Exam">
              <h5>Finance</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExploreExam;
