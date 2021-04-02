import React, { useRef, useEffect, useState } from "react";

import { Spring } from "react-spring/renderprops.cjs";

import { gsap } from "gsap";

const WomenHomepage = ({
  imgSrc,
  imgAlt,
  initialFlexPosition,
  className,
  style,
}) => {
  const menuRef = useRef(null);
  const [isOnPhone, setIsOnPhone] = useState(false);
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
    <div className="category-section">
      <div style={{ position: "relative" }} className="directory-menu">
        <div
          style={{ display: "flex", justifyContent: initialFlexPosition }}
          className="directory-menu__top-part"
        >
          {isOnPhone ? (
            <Spring from={{ width: "49%" }} to={{ width: "100%" }}>
              {(style) => (
                <img
                  style={style}
                  className={className}
                  src={imgSrc}
                  alt={imgAlt}
                />
              )}
            </Spring>
          ) : (
            <Spring from={{ width: "33.33%" }} to={{ width: "100%" }}>
              {(style) => (
                <img
                  style={style}
                  className={className}
                  src={imgSrc}
                  alt={imgAlt}
                />
              )}
            </Spring>
          )}
        </div>
        <div
          ref={menuRef}
          style={style}
          className="directory-menu__intro"
        ></div>
      </div>
    </div>
  );
};

export default WomenHomepage;
