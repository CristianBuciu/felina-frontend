import React from "react";
import { Link } from "react-router-dom";

import { Spring } from "react-spring/renderprops.cjs";
import logo from "../../assets/cat.png";

const Directory = (props) => {
  return (
    <div className="directory-menu">
      <div className="directory-menu--grey"></div>
      <div className="directory-menu__top-part">
        <Spring
          from={{ transform: "translateX(-250%)" }}
          to={{ transform: "translateX(0)" }}
        >
          {(style) => (
            <img
              style={style}
              className="directory-menu__top-part--image directory-menu__top-part--image__women"
              src="https://res.cloudinary.com/c1oud9/image/upload/c_scale,h_1080/v1606757469/fierce-woman-wide-min_gybxxq.jpg"
              alt="women"
            />
          )}
        </Spring>
        <Spring
          from={{ transform: "translateY(-50%)" }}
          to={{ transform: "translateY(0)" }}
        >
          {(style) => (
            <div
              style={style}
              className="directory-menu__top-part--central-part"
            >
              <img
                src={logo}
                alt="logo"
                className="directory-menu__top-part--central-part__logo"
              />
              <h2 className="directory-menu__top-part--central-part__text">
                FIERCE FASHION <br /> DISCOVER THE COLLECTION
              </h2>
              <div className="directory-menu__top-part--central-part--buttons-container">
                <Link
                  className="directory-menu__top-part--central-part--buttons-container__button"
                  to="/women/homepage"
                >
                  FOR HER
                </Link>
                <Link
                  className="directory-menu__top-part--central-part--buttons-container__button"
                  to="/men/homepage"
                >
                  FOR HIM
                </Link>
              </div>

              <div className="directory-menu__top-part__lower">
                <h1 className="directory-menu__top-part__lower--title">
                  <span className="directory-menu__top-part__lower--title__logo">
                    FEL!NA
                  </span>
                  <br />
                  BE FIERCE, BE BOLD, BE YOU
                </h1>
              </div>
            </div>
          )}
        </Spring>

        <Spring
          from={{ transform: "translateX(250%)" }}
          to={{ transform: "translateX(0)" }}
        >
          {(style) => (
            <img
              style={style}
              className="directory-menu__top-part--image directory-menu__top-part--image__man"
              src="https://res.cloudinary.com/c1oud9/image/upload/c_scale,h_1080/v1606857930/AdobeStock_367568464-min_sgxnoh.jpg"
              alt="men"
            />
          )}
        </Spring>
      </div>
    </div>
  );
};

export default Directory;
