//! Core packages
import React, { useEffect, useRef } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

//! Redux imports
import { connect } from "react-redux";
import { selectWomenLinkDataSection } from "../../redux/womenLinkData/womenLinkData.selectors";
import { selectWomenShopData } from "../../redux/womenShopData/womenShopData.selectors";
import { createStructuredSelector } from "reselect";

//! Components
import CategoryDirectory from "../../components/category-directory/CategoryDirectory";
import DropdownCustomMenu from "../../components/dropdown-menu/DropdownCustomMenu";
import CategoryHomepage from "../category-homepage/CategoryHomepage";
import Product from "../product/Product";

//! Additional packages
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { v4 as uuidv4 } from "uuid";
function Women({ womenLinkData, womenShopData }) {
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

      <Route
        exact
        path="/women/homepage"
        render={() => (
          <CategoryHomepage
            imgSrc="https://res.cloudinary.com/c1oud9/image/upload/c_scale,h_1080/v1606757469/fierce-woman-wide-min_gybxxq.jpg"
            imgAlt="women"
            initialFlexPosition="flex-start"
            title="WOMEN"
            className="homepage-1st-section__top-part--image homepage-1st-section__top-part--image__women"
            introTitle="New Arrivals"
            introLinks={[
              {
                id: uuidv4(),
                title: "FEL!NA COLLECTION",
                route: "/women/new-arrivals/felina-collection",
                cName: "dropdown-links dropdown-links__important",
                imgSrc:
                  "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GGK067068Z-P6K2",
                imageClassName: "most-wanted-image ",
              },
              {
                id: uuidv4(),
                title: "Denim Season",
                route: "/women/new-arrivals/denim-season",
                cName: "dropdown-links",
                imgSrc:
                  "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/0BG1539340Z-BRWA-ALT1",
                imageClassName: "most-wanted-image",
              },
              {
                id: uuidv4(),
                title: "Sustainable Style",
                route: "/women/new-arrivals/sustainable-style",
                cName: "dropdown-links ",
                imgSrc:
                  "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/1GG7289543Z-F1Y8-ALT1",
                imageClassName: "most-wanted-image",
              },
            ]}
          />
        )}
      />
      {womenShopData.newArrival.subcategories.map((el) => (
        <Switch key={el.id}>
          <Route
            exact
            path={el.route}
            render={() => (
              <CategoryDirectory
                subTitle={el.subTitle}
                title={el.title}
                items={el.items}
                path={el.route}
              />
            )}
          />
          <Route
            path={`${el.route}/:id`}
            render={() => <Product items={el.items} />}
          />
        </Switch>
      ))}

      {womenShopData.clothing.subcategories.map((el) => (
        <Switch key={el.id}>
          <Route
            exact
            path={el.route}
            render={(props) => (
              <CategoryDirectory
                id={el.id}
                subTitle={el.subTitle}
                title={el.title}
                items={el.items}
                path={el.route}
              />
            )}
          />
          <Route
            path={`${el.route}/:id`}
            render={() => <Product items={el.items} />}
          />
        </Switch>
      ))}
      {womenShopData.bagsAccessories.subcategories.map((el) => (
        <Switch key={el.id}>
          <Route
            exact
            path={el.route}
            render={(props) => (
              <CategoryDirectory
                id={el.id}
                subTitle={el.subTitle}
                title={el.title}
                items={el.items}
                path={el.route}
              />
            )}
          />
          <Route
            path={`${el.route}/:id`}
            render={() => <Product items={el.items} />}
          />
        </Switch>
      ))}
      {womenShopData.shoes.subcategories.map((el) => (
        <Switch key={el.id}>
          <Route
            exact
            path={el.route}
            render={(props) => (
              <CategoryDirectory
                id={el.id}
                subTitle={el.subTitle}
                title={el.title}
                items={el.items}
                path={el.route}
              />
            )}
          />
          <Route
            path={`${el.route}/:id`}
            render={() => <Product items={el.items} />}
          />
        </Switch>
      ))}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  womenLinkData: selectWomenLinkDataSection,
  womenShopData: selectWomenShopData,
});
export default connect(mapStateToProps)(Women);
