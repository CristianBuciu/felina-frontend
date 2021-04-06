//! Core
import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

//! Extra npm packages
import { Spring } from "react-spring/renderprops.cjs";
import { gsap } from "gsap";
//! Components
import DropdownImages from "../../components/dropdown-images/DropdownImages";

//! Icons
import { GiClick } from "react-icons/gi";

const CategoryHomepage = ({
  imgSrc,
  imgAlt,
  initialFlexPosition,
  className,
  introTitle,
  introLinks,
}) => {
  //! Hooks
  const history = useHistory();
  //! Refs
  const menuRef = useRef(null);
  //! State
  const [isOnPhone, setIsOnPhone] = useState(false);
  //! Use Effect
  useEffect(() => {
    const phoneMediaQuery = window.matchMedia(
      "(min-device-width: 320px) and (max-device-width: 480px)"
    );
    if (phoneMediaQuery.matches) {
      setIsOnPhone(true);
    }
    gsap.from(menuRef.current, {
      duration: 0.5,
      autoAlpha: 0,
      ease: "none",
      delay: 0.5,
    });
  }, [menuRef]);
  return (
    <div className="category-homepage">
      <div style={{ position: "relative" }} className="directory-menu">
        <div
          style={{ display: "flex", justifyContent: initialFlexPosition }}
          className="directory-menu__top-part"
        >
          {isOnPhone ? (
            <Spring from={{ width: "49%" }} to={{ width: "100%" }}>
              {(style) => (
                <>
                  <img
                    style={style}
                    className={className}
                    src={imgSrc}
                    alt={imgAlt}
                  />
                  <div className="category-homepage__mobile-intro">
                    <h1 className="category-homepage__title">{introTitle}</h1>
                    {introLinks.map((el) => (
                      <div
                        key={el.id}
                        onClick={() => history.push(el.route)}
                        className="category-homepage__mobile-card"
                      >
                        <div className="category-homepage__mobile-card--flex">
                          {" "}
                          <h1 className="category-homepage__mobile-card--title">
                            {el.title}
                          </h1>
                          <GiClick className="category-homepage__mobile-card--icon" />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </Spring>
          ) : (
            <Spring from={{ width: "33.33%" }} to={{ width: "100%" }}>
              {(style) => (
                <>
                  <img
                    style={style}
                    className={className}
                    src={imgSrc}
                    alt={imgAlt}
                  />
                  <div style={style} className="category-homepage__intro">
                    <h1 className="category-homepage__title">{introTitle}</h1>
                    <div className="category-homepage__grid">
                      {introLinks.map((el) => (
                        <DropdownImages
                          key={el.id}
                          imageClassName={el.imageClassName}
                          imgSrc={el.imgSrc}
                          title={el.title}
                          route={el.route}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </Spring>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryHomepage;
