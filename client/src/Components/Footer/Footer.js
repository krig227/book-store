import React from "react";
import "./Index.css";
import { SubBox, DiscordIcon, InstagramIcon } from "../../Icons/Icon";

const Footer = () => {
  return (
    <footer>
      <div className="Footer-Container">
        <div className="Footer-Content">
          <div className="Contact-Us">
            <h3>CONTACT US</h3>
            <p>Books And Smile</p>
            <p>300 xxxx Street,Ch 60440</p>
            <p>Phone: 1002003400</p>
            <p>Email:help@bookandsmile.com</p>
          </div>

          <div className="Footer-MidSection">
            <div className="Logo-Footer">
              {" "}
              <img src="Logo.svg" alt="Logo-Footer"></img>
            </div>
            <div className="Suggestion-Logo">
              <SubBox />
            </div>
            <div className="Suggestion-Button">
              <button className="Button-Footer">Suggestion Box</button>
            </div>
          </div>

          <div className="Footer-End">
            <div className="Footer-Connect">
              <h3>STAY CONNECTED</h3>
              <div className="Social-Icon-Footer">
                <InstagramIcon />
                <DiscordIcon />
              </div>
              <div className="Footer-Newseleeter">
                <button className="Button-Footer">Signup For Newsletter</button>
              </div>
            </div>
          </div>
        </div>
        <div className="Copyright-Footer">
          <p>© 2023 Books And Smile. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
