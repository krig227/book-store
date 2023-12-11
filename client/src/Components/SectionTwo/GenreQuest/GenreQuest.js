import React, { useEffect, useState } from "react";
import "./Index.css";
import Snap from "../../../images/Frame26.png";
import calendar from "../../../images/Frame91.png";
import { Link } from "react-router-dom";

const GenreQuest = () => {
  const [Data, setData] = useState([]);
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_API_URL
      : process.env.REACT_APP_PROD_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/upcomingevents/upcoming`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="Section-Sub">
      <div className="Genre-Container">
        <div className="Genre-Header">
          <h3>GenreQuest: 12 Month Reading Adventure</h3>
        </div>
        <div className="Genre-Content">
          <ul className="Genre-List">
            <li className="Genre-Listitem">12 month Reading Hookup Plan</li>
            <li className="Genre-Listitem">Discover new Worlds Every Month</li>
            <li className="Genre-Listitem">Customize Your Genre Preference</li>
            <li className="Genre-Listitem">
              Handpicked Books Delivered To Your Door
            </li>
            <li className="Genre-Listitem">
              Immerse Yourself In A Book Each Month
            </li>
          </ul>
          <h3>Only ₹ 1200 For The Entire Year</h3>
        </div>
        <button className="Subscribe-Button">Subscribe</button>
      </div>
      <div className="Snap-Redeem-Conatiner">
        <img className="Snap-Image" src={Snap} alt="Snap-pic" />
      </div>

      <div className="Upcoming-Events-Container">
        <div className="Calendar-Effect">
          {" "}
          <img src={calendar} alt="cal-effect" />
        </div>
        <div className="Upcoming-Events-Header">
          <h3>UPCOMING EVENTS</h3>
          <div className="Line-Events"></div>
        </div>
        {Data.map((Data, index) => (
          <div className="Upcoming-Events-Content" key={index}>
            <div className="Upcoming-Rectangle"></div>
            <div className="Upcoming-Date-Details">
              {Data.time && (
                <>
                  <div className="Upcoming-Month">
                    {Data.time.split(" ")[0]}
                  </div>
                  <div className="Upcoming-Date">{Data.time.split(" ")[1]}</div>
                </>
              )}
            </div>
            <div className="Upcoming-Details">
              <div className="Upcoming-EventName">{Data.name}</div>
              <p className="Upcoming-EventPara">
                {`${Data.time} at ${Data.destination}`}
              </p>
            </div>
            <div>
              <Link className="Upcoming-Register">Register</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenreQuest;
