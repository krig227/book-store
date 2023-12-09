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

const ExploreComponent = () => {
  return (
    <div className="Explore-container">
      <div className="Explore-Header">
        <h3>Explore By Genre</h3>
      </div>
      <div className="Explore-Content-Container">
        <Link className="Explore-Content-Link" to="/books/movies&tv">
          <div className="Explore-Content">
            <div className="Explore-Icon">
              <MovieIcon />
            </div>
            <div className="Explore-category">
              <h5>Movies & TV</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link" to="/books/horror">
          <div className="Explore-Content">
            <div className="Explore-Icon">
              <HorrorIcon />
            </div>
            <div className="Explore-category">
              <h5>Horror</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link" to="/books/picture">
          <div className="Explore-Content">
            <div className="Explore-Icon">
              <PictureIcon />
            </div>
            <div className="Explore-category">
              <h5>Picture</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link" to="/books/fantasy">
          <div className="Explore-Content">
            <div className="Explore-Icon">
              <FantasyIcon />
            </div>
            <div className="Explore-category">
              <h5>Fantasy</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link" to="/books/education">
          <div className="Explore-Content">
            <div className="Explore-Icon">
              <EducationIcon />
            </div>
            <div className="Explore-category">
              <h5>Education</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link" to="/books/romance">
          <div className="Explore-Content">
            <div className="Explore-Icon">
              <RomanceIcon />
            </div>
            <div className="Explore-category">
              <h5>Romance</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link" to="/books/history">
          <div className="Explore-Content">
            <div className="Explore-Icon">
              <HistoryIcon />
            </div>
            <div className="Explore-category">
              <h5>History</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link" to="/books/children">
          <div className="Explore-Content">
            <div className="Explore-Icon">
              <ChildrenIcon />
            </div>
            <div className="Explore-category">
              <h5>Children</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link" to="/books/thriller">
          <div className="Explore-Content">
            <div className="Explore-Icon">
              <ThrillerIcon />
            </div>
            <div className="Explore-category">
              <h5>Thriller</h5>
            </div>
          </div>
        </Link>
        <Link className="Explore-Content-Link" to="/books/technology">
          <div className="Explore-Content">
            <div className="Explore-Icon">
              <TechnologyIcon />
            </div>
            <div className="Explore-category">
              <h5>Technology</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExploreComponent;
