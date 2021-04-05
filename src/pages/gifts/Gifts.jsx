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
    <div>
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
              className="directory-menu__top-part--image directory-menu__top-part--image__gifts"
              style={{
                right: "2rem",
                backgroundImage:
                  "linear-gradient(to left,rgba(0, 0, 0, 0.7),rgba(45, 45, 45, 0.6),rgba(87, 87, 87, 0.4), rgba(133, 133, 133, 0.2), rgba(182, 182, 182, 0.01))",
              }}
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
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  giftsLinkData: selectGiftsLinkDataSection,
  giftsShopData: selectGiftsShopData,
});

export default connect(mapStateToProps)(Gifts);
