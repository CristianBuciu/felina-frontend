//! Core
import React, { useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";

//! Redux
import { selectKidsLinkDataSection } from "../../redux/kidsLinkData/kidsLinkData.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectKidsShopData } from "../../redux/kidsShopData/kidsShopData.selector";

//! Components
import DropdownCustomMenu from "../../components/dropdown-menu/DropdownCustomMenu";
import CategoryHomepage from "../category-homepage/CategoryHomepage";
import CategoryDirectory from "../../components/category-directory/CategoryDirectory";

//! Extra npm packages
import { Spring } from "react-spring/renderprops.cjs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { v4 as uuidv4 } from "uuid";

//! =============================================================================
function Kids({ kidsLinkData, kidsShopData }) {
  //! Scroll gsap declaration
  const dropdownMenuRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  //! Use effect
  useEffect(() => {
    const phoneMediaQuery = window.matchMedia(
      "(min-device-width: 320px) and (max-device-width: 480px)"
    );
    if (!phoneMediaQuery.matches) {
      gsap.to(
        dropdownMenuRef.current,
        {
          scrollTrigger: {
            trigger: dropdownMenuRef.current,
            start: "top top+=50",
            end: "bottom top",
            toggleActions: "play none none restart",
            // markers: true,
            scrub: 0.5,
          },

          y: "-125%",

          scaleY: 0.95,
        },
        []
      );
    }
  }, []);
  return (
    <div>
      <div ref={dropdownMenuRef} className="categories-flex">
        {kidsLinkData.map((e) => (
          <DropdownCustomMenu
            key={e.id}
            activeClass={e.activeClass}
            cName={e.cName}
            route={e.route}
            title={e.title}
            dropdownLinks={e.dropdownLinks}
            size={2}
          />
        ))}
      </div>

      <Switch>
        <Route
          exact
          path="/kids/homepage"
          render={() => (
            <CategoryHomepage
              imgSrc="https://res.cloudinary.com/c1oud9/image/upload/c_scale,h_1080/v1606941388/AdobeStock_177246524-min_aizq8f.jpg"
              imgAlt="kids"
              initialFlexPosition="center"
              className="homepage-1st-section__top-part--image homepage-1st-section__top-part--image__kids"
              introTitle="Junior Collection"
              introLinks={[
                {
                  id: uuidv4(),
                  title: "For girls",
                  route: "/kids/girls/junior",
                  cName: "dropdown-links",
                  imgSrc:
                    "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/J1GI24K6YW1-C448",
                  imageClassName: "most-wanted-image ",
                },
                {
                  id: uuidv4(),
                  title: "For boys",
                  route: "/kids/boys/junior",
                  cName: "dropdown-links",
                  imgSrc:
                    "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/L1RN03WDO30-DEKB",
                  imageClassName: "most-wanted-image most-wanted-image__jacket",
                },
              ]}
            />
          )}
        />
        {kidsShopData.boys.subcategories.map((el) => (
          <Route
            key={el.id}
            exact
            path={el.route}
            render={() => (
              <CategoryDirectory
                subTitle={el.subTitle}
                title={el.title}
                items={el.items}
              />
            )}
          />
        ))}
        {kidsShopData.girls.subcategories.map((el) => (
          <Route
            key={el.id}
            exact
            path={el.route}
            render={() => (
              <CategoryDirectory
                subTitle={el.subTitle}
                title={el.title}
                items={el.items}
              />
            )}
          />
        ))}
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  kidsLinkData: selectKidsLinkDataSection,
  kidsShopData: selectKidsShopData,
});

export default connect(mapStateToProps)(Kids);
