import React from "react";
//
import logo from "../../assets/cat-white.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div>
          <h3 className="footer__title">Location</h3>
          <address className="footer__text">
            Calle Miraflores, 2 <br />
            Almeria <br />
            Andalucia <br />
            012345
          </address>
        </div>
        <div>
          <h3 className="footer__title">Contact</h3>
          <p className="footer__text">
            Cristian Buciu <br />
            +34 123 456 789 <br />
            some.email@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
