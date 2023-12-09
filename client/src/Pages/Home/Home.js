import React from "react";

import SectionOne from "../../Components/SectionOne/SectionOne-Main Component/SectionOne";
import SectionTwo from "../../Components/SectionTwo/SectionTwo-Main/SectionTwo";

const Home = () => {
  return (
    <>
      <div className="Home-Container">
        <SectionOne />
        <SectionTwo />
      </div>
    </>
  );
};

export default Home;
