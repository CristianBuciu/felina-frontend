import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Spring } from "react-spring/renderprops.cjs";
import logo from "../../assets/cat.png";

import { gsap } from "gsap";

const Directory = (props) => {
  const centralPartRef = useRef(null);
  const images1Ref = useRef(null);
  const images2Ref = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);

    const phoneMediaQuery = window.matchMedia(
      "(min-device-width: 320px) and (max-device-width: 480px)"
    );
    if (!phoneMediaQuery.matches) {
    }
    gsap.fromTo(
      centralPartRef.current,
      { scale: 0.9 },
      { scale: 1, duration: 1 }
    );
    gsap.fromTo(
      images1Ref.current,
      { opacity: 0.3 },
      { opacity: 1, duration: 1.5 }
    );
    gsap.fromTo(
      images2Ref.current,
      { opacity: 0.3 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);
  return (
    <div className="directory-menu">
      <div className="directory-menu--grey"></div>
      <div className="directory-menu__top-part">
        <img
          ref={images1Ref}
          className="directory-menu__top-part--image directory-menu__top-part--image__women"
          src="https://res.cloudinary.com/c1oud9/image/upload/c_scale,h_1080/v1606757469/fierce-woman-wide-min_gybxxq.jpg"
          alt="women"
        />

        <div
          ref={centralPartRef}
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
              <span className="directory-menu__top-part__lower--title__slogan">
                BE FIERCE, BE BOLD, BE YOU
              </span>
            </h1>
          </div>
        </div>

        <img
          ref={images2Ref}
          className="directory-menu__top-part--image directory-menu__top-part--image__man"
          src="https://res.cloudinary.com/c1oud9/image/upload/c_scale,h_1080/v1606857930/AdobeStock_367568464-min_sgxnoh.jpg"
          alt="men"
        />
      </div>
    </div>
  );
};

export default Directory;
