import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import OptionLink from "../option-links/OptionLink";
import nextId from "react-id-generator";
import { createStructuredSelector } from "reselect";
import Sidebar from "../sidebar/Sidebar";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { RiUser3Fill, RiUserAddLine, RiShoppingBagLine } from "react-icons/ri";
import logo from "../../assets/cat.png";
import { headerLinks } from "./headerLinks";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { selectCartShow } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Transition } from "react-spring/renderprops.cjs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//! =============================================================================
const Header = ({ currentUser, showCart }) => {
  const dir = Math.random() >= 0.5 ? -1 : 1;
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const logoTitleRef = useRef(null);
  const headerAlertRef = useRef(null);
  const headerLinksRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(
      logoRef.current,
      {
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top top",
          end: "bottom",
          toggleActions: "play none none reset",
          // markers: true,
          scrub: 1,
        },
        scale: 0.4,
        x: "-45%",
        y: "-25%",
      },
      []
    );

    gsap.to(
      logoTitleRef.current,
      {
        scrollTrigger: {
          trigger: logoTitleRef.current,
          start: "top top",
          end: "bottom",
          toggleActions: "play none none reset",
          // markers: true,
          scrub: 1,
        },
        autoAlpha: 0,
      },
      []
    );

    gsap.to(
      headerAlertRef.current,
      {
        scrollTrigger: {
          trigger: headerAlertRef.current,
          start: "top top",
          end: "bottom",
          toggleActions: "play none none reset",
          // markers: true,
          scrub: 1,
        },
        autoAlpha: 0,
      },
      []
    );

    gsap.to(
      headerLinksRef.current,
      {
        scrollTrigger: {
          trigger: headerLinksRef.current,
          start: "top top",
          end: "bottom",
          toggleActions: "play none none reset",
          // markers: true,
          scrub: 1,
        },
        scale: 0.8,
        y: "-88%",
      },
      []
    );
    gsap.to(
      headerRef.current,
      {
        scrollTrigger: {
          trigger: headerLinksRef.current,
          start: "top top",
          end: "bottom",
          toggleActions: "play none none reset",
          // markers: true,
          scrub: 1,
        },

        height: "50px",

        duration: 0.5,
      },
      []
    );
  });

  return (
    <header ref={headerRef} className="app-header">
      <nav className="header">
        <div className="header__top-links">
          <div style={{ width: "25%" }}></div>
          <h3
            ref={headerAlertRef}
            id="header__alert"
            className="header__sub-header--text"
          >
            {currentUser
              ? "YOU ARE ELIGIBLE FOR FREE STANDARD SHIPPING"
              : "LOG IN TO YOUR ACCOUNT TO GET FREE STANDARD SHIPPING"}
          </h3>
          {currentUser ? (
            <div className="header__icons-container">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => auth.signOut()}
                className="header__icon-link"
              >
                <h4 className="header__icons-container--close">END SESSION</h4>
              </div>
              <NavLink
                activeClassName="is-active2"
                className="header__icon-link"
                to="/profile"
              >
                <RiUser3Fill className="icons" />
              </NavLink>
              <CartIcon
                activeClass={showCart ? "is-active2" : ""}
                cName={"header__icon-link"}
                title={<RiShoppingBagLine className="icons" />}
                route="/checkout"
              />
            </div>
          ) : (
            <div className="header__icons-container">
              <OptionLink
                activeClass="is-active2"
                cName="header__icon-link"
                route="/register"
                title={<RiUserAddLine className="icons" />}
              />
              <CartIcon
                activeClass={showCart ? "is-active2" : ""}
                cName={"header__icon-link"}
                title={<RiShoppingBagLine className="icons" />}
              />
            </div>
          )}
          <Transition
            items={showCart}
            from={{ opacity: 0, transform: `translate3d(${100 * dir}%,0,0)` }}
            enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
            leave={{ opacity: 0, transform: `translate3d((${-50 * dir}%,0,0)` }}
          >
            {(showCart) =>
              showCart &&
              ((props) => <CartDropdown style={props} route="/checkout" />)
            }
          </Transition>
        </div>

        <div ref={logoRef} className="header__logo-container">
          <NavLink className="header__logo-flex" to="/">
            <h1 ref={logoTitleRef} className="header__logo-title">
              FEL!NA
              <span className="header__slogan">Fierce Fashion</span>
            </h1>
            <img src={logo} alt="Logo" className="header__logo" /> <br />
          </NavLink>
        </div>
        <div ref={headerLinksRef} className="header__options-container">
          {headerLinks.map((e) => (
            <OptionLink
              key={nextId()}
              cName={e.cName}
              route={e.route}
              title={e.title}
            />
          ))}
        </div>
      </nav>
      <Sidebar />
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showCart: selectCartShow,
});
export default connect(mapStateToProps)(Header);
