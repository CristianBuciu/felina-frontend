import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./OptionLinks.scss";

const OptionLink = (props) => {
  const location = useLocation();

  const activeClass =
    location.pathname.split("/")[1] === props.title ? "is-active" : "";
  return (
    <Link className={`${props.cName} ${activeClass} `} to={props.route}>
      {props.title}
    </Link>
  );
};

export default OptionLink;
