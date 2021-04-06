//! Core
import React from "react";

//! Components
import Homepage1Section from "../../components/homepage-1st-section/Homepage1Section";
import Homepage2ndSection from "../../components/homepage-2nd-section/Homepage2ndSection";

const Homepage = () => {
  return (
    <div className="homepage">
      <Homepage1Section />
      <Homepage2ndSection />
    </div>
  );
};
export default Homepage;
