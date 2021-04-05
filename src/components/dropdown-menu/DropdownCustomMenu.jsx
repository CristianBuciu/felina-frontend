import React, { useState, useEffect } from "react";

import DropdownLinks from "../dropdown-links/DropdownLinks";
import DropdownImages from "../dropdown-images/DropdownImages";
import { useLocation } from "react-router-dom";

const DropdownCustomMenu = (props) => {
  const [clickedDropdown, setClickedDropdown] = useState(false);

  const [onPhoneDetector, setOnPhoneDetector] = useState(false);

  //! Use effect
  useEffect(() => {
    const phoneMediaQuery = window.matchMedia(
      "(min-device-width: 320px) and (max-device-width: 480px)"
    );
    if (phoneMediaQuery.matches) {
      setOnPhoneDetector(true);
    }
  }, []);

  //! Handlers
  const onClickHandler = () => {
    if (onPhoneDetector) {
      setClickedDropdown(!clickedDropdown);
    } else return;
  };

  const closeMenuHandler = () => {
    setClickedDropdown(false);
  };

  let n = props.size;
  const randomImages = props.dropdownLinks
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, n);
  const location = useLocation();
  const activeClass =
    location.pathname.split("/")[2].replace(/-/g, "") ===
    props.title.toLowerCase().replace(/&/g, "").split(" ").join("")
      ? "is-active-category-title"
      : "";

  return (
    <div className="categories-dropdown">
      <div
        tabIndex={0}
        role="menu"
        onClick={onClickHandler}
        onBlur={closeMenuHandler}
        className={`${props.cName} ${activeClass} categories-dropdown__hover-span`}
      >
        {props.title}

        <div
          className={
            onPhoneDetector && clickedDropdown
              ? "phone-dropdown-show dropdown-items"
              : "dropdown-items"
          }
        >
          <div className="dropdown-items__links-container">
            <h2 className="dropdown-items__title">{props.title}</h2>
            {props.dropdownLinks.map((el) => (
              <DropdownLinks
                handler={closeMenuHandler}
                key={el.id}
                title={el.title}
                route={el.route}
                cName={el.cName}
              />
            ))}
          </div>

          <div className="dropdown-items__image-container">
            {randomImages.map((el) => (
              <DropdownImages
                handler={closeMenuHandler}
                key={el.id}
                route={el.route}
                title={el.title}
                imgSrc={el.imgSrc}
                imageClassName={el.imageClassName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownCustomMenu;
