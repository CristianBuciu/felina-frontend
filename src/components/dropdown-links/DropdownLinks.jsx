import React from "react";
import "./DropdownLinks.scss";
import { NavLink } from "react-router-dom";

const DropdownLinks = (props) => {
  return (
    <div className="dropdown-links">
      <NavLink to={props.route} className={`${props.cName} `}>
        {props.title}
      </NavLink>
    </div>
  );
};

export default DropdownLinks;
