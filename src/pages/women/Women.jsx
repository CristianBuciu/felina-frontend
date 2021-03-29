import React, { useEffect, useRef } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import CategoryDirectory from "../../components/category-directory/CategoryDirectory";
import DropdownCustomMenu from "../../components/dropdown-menu/DropdownCustomMenu";
import CategoryHomepage from "../category-homepage/CategoryHomepage";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { connect } from "react-redux";
import { selectWomenLinkDataSection } from "../../redux/womenLinkData/womenLinkData.selectors";
import { selectWomenShopData } from "../../redux/womenShopData/womenShopData.selectors";
import { createStructuredSelector } from "reselect";

function Women({ womenLinkData, womenShopData }) {
  const dropdownMenuRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
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
        {womenLinkData.map((e) => (
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
          path="/women/homepage"
          render={() => (
            <CategoryHomepage
              imgSrc="https://res.cloudinary.com/c1oud9/image/upload/c_scale,h_1080/v1606757469/fierce-woman-wide-min_gybxxq.jpg"
              imgAlt="women"
              initialFlexPosition="flex-start"
              title="WOMEN"
              className="directory-menu__top-part--image directory-menu__top-part--image__women"
              style={{
                right: "2rem",
                backgroundImage:
                  "linear-gradient(to left,rgba(0, 0, 0, 0.7),rgba(45, 45, 45, 0.6),rgba(87, 87, 87, 0.4), rgba(133, 133, 133, 0.2), rgba(182, 182, 182, 0.01))",
              }}
            />
          )}
        />
        {womenShopData.newArrival.subcategories.map((el) => (
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

        {womenShopData.clothing.subcategories.map((el) => (
          <Route
            key={el.id}
            exact
            path={el.route}
            render={(props) => (
              <CategoryDirectory
                id={el.id}
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
  womenLinkData: selectWomenLinkDataSection,
  womenShopData: selectWomenShopData,
});
export default connect(mapStateToProps)(Women);
