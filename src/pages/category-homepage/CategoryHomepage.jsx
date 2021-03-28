import React, { useRef, useEffect } from "react";

import { Spring } from "react-spring/renderprops.cjs";

import { gsap } from "gsap";
import "./CategoryHomepage.scss";

const WomenHomepage = ({
  imgSrc,
  imgAlt,
  initialFlexPosition,
  className,
  style,
}) => {
  const menuRef = useRef(null);
  useEffect(() => {
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
        </div>
        <div ref={menuRef} style={style} className="directory-menu__intro">
          <h2>DISCOVER THE NEW HOLIDAY COLLECTION</h2>
        </div>
      </div>
    </div>
  );
};

export default WomenHomepage;
