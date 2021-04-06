//! Core
import React, { useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";

//! Components
import CategoryDirectory from "../../components/category-directory/CategoryDirectory";
import DropdownCustomMenu from "../../components/dropdown-menu/DropdownCustomMenu";
import CategoryHomepage from "../category-homepage/CategoryHomepage";

//! Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectGiftsLinkDataSection } from "../../redux/giftsLinkData/giftsLinkData.selectors";
import { selectGiftsShopData } from "../../redux/giftsShopData/giftsShopData.selector";

//! Additional packages
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { v4 as uuidv4 } from "uuid";

//! =============================================================================
function Gifts({ giftsLinkData, giftsShopData }) {
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
    <>
      <div ref={dropdownMenuRef} className="categories-flex">
        {giftsLinkData.map((e) => (
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
          path="/gifts/homepage"
          render={() => (
            <CategoryHomepage
              imgSrc="https://res.cloudinary.com/c1oud9/image/upload/c_scale,h_1080,q_80/v1606860464/shutterstock_739730530-min_ojqmqf.jpg"
              imgAlt="gifts"
              initialFlexPosition="left"
              className="homepage-1st-section__top-part--image homepage-1st-section__top-part--image__gifts"
              introTitle="Accessories Gifts"
              introLinks={[
                {
                  id: uuidv4(),
                  title: "For Him",
                  route: "/gifts/for-him/accessories",
                  cName: "dropdown-links",
                  imgSrc:
                    "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/G0001252QQQ-08V",
                  imageClassName: "most-wanted-image most-wanted-image__jacket",
                },
                {
                  id: uuidv4(),
                  title: "For Her",
                  route: "/gifts/for-her/accessories",
                  cName: "dropdown-links",
                  imgSrc:
                    "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/JUBE20055JW-GL-ALT1",
                  imageClassName: "most-wanted-image ",
                },
              ]}
            />
          )}
        />
        {giftsShopData.forHer.subcategories.map((el) => (
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
        {giftsShopData.forHim.subcategories.map((el) => (
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
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  giftsLinkData: selectGiftsLinkDataSection,
  giftsShopData: selectGiftsShopData,
});

export default connect(mapStateToProps)(Gifts);
