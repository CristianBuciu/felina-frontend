import React from "react";
//
import logo from "../../assets/cat-white.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-grid">
          <div className="footer-logo">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="footer__text-container">
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
      </div>
      <h1
        style={{
          backgroundColor: "rgb(245,245,245)",
          color: "black",
          textAlign: "center",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          fontWeight: "400",
          fontSize: "1.8rem",
        }}
      >
        Most of the photos are from{" "}
        <a style={{ color: "red " }} href="https://www.guess.eu/en-es/home">
          &copy; GUESS
        </a>{" "}
        except &nbsp;
        <a style={{ color: "red " }} href="/men/bags-accessories/belts">
          these
        </a>{" "}
        that are from &nbsp;
        <a style={{ color: "red " }} href="https://www.cosstores.com/">
          &copy; Cosstores
        </a>
        . This is a fake website part of a portfolio. I take no credit for the
        photos and will never use them for commercial purposes. Contact me{" "}
        <a style={{ color: "red " }} href="cristian.buciu89@gmail.com">
          here
        </a>{" "}
        .
      </h1>
    </>
  );
};

export default Footer;
