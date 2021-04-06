import React from "react";
import { useHistory } from "react-router-dom";

const Homepage2ndSection = () => {
  const history = useHistory();
  return (
    <div className="homepage-2nd-section">
      <div className="homepage-2nd-section__male">
        <h1 className="homepage-2nd-section__title-male">DENIM</h1>
        <img
          className="homepage-2nd-section__image"
          src="https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GH27D4CF1-WIPE-ALT1"
          alt="denim-male"
        />
        <div className="homepage-2nd-section__link-container">
          <h1 className="homepage-2nd-section__link-container--title">Men</h1>
          <p
            className="homepage-2nd-section__link"
            onClick={() => {
              history.push("/men/new-arrivals/denim-season");
            }}
          >
            Discover more
          </p>
        </div>
      </div>
      <div className="homepage-2nd-section__female">
        <h1 className="homepage-2nd-section__title-female">SEASON</h1>
        <img
          className="homepage-2nd-section__image"
          src="https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/W1RD49D4AK2-ONEW"
          alt="denim-female"
        />
        <div className="homepage-2nd-section__link-container">
          <h1 className="homepage-2nd-section__link-container--title">Women</h1>
          <p
            className="homepage-2nd-section__link"
            onClick={() => {
              history.push("/women/new-arrivals/denim-season");
            }}
          >
            Discover more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage2ndSection;
