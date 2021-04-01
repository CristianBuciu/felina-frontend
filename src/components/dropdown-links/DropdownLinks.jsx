import React from "react";
import "./DropdownLinks.scss";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const DropdownLinks = (props) => {
  const history = useHistory();
  const clickHandler = () => {
    props.handler;
    history.push(props.route);
  };
  return (
    <div onClick={clickHandler} className="dropdown-links">
      <p className={`${props.cName} `}>{props.title}</p>
    </div>
  );
};

export default DropdownLinks;
