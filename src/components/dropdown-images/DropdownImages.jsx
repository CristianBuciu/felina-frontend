import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const DropdownImages = (props) => {
  const history = useHistory();

  const clickHandler = () => {
    props.handler;
    history.push(props.route);
  };
  return (
    <div className="dropdown-images-container">
      <img src={props.imgSrc} className={props.imageClassName} alt="" />
      <div className="dropdown-images-container__inner">
        <h2 className="dropdown-images-container__inner--title">
          {props.title}
        </h2>
        <p
          onClick={clickHandler}
          className="dropdown-images-container__inner--link"
        >
          SHOP NOW
        </p>
      </div>
    </div>
  );
};

export default DropdownImages;
