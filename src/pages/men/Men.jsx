//! Core packages
import React, { useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";

//! Redux imports
import { connect } from "react-redux";
import { selectMenLinkDataSection } from "../../redux/menLinkData/menLinkData.selectors";
import { createStructuredSelector } from "reselect";
import { selectMenShopData } from "../../redux/menShopData/menShopData.selector";

//! Components
import CategoryDirectory from "../../components/category-directory/CategoryDirectory";
import DropdownCustomMenu from "../../components/dropdown-menu/DropdownCustomMenu";
import CategoryHomepage from "../category-homepage/CategoryHomepage";

//! Additional packages
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { v4 as uuidv4 } from "uuid";

function Men({ menLinkData, menShopData }) {
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
        {menLinkData.map((e) => (
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
          path="/men/homepage"
          render={() => (
            <CategoryHomepage
              imgSrc="https://res.cloudinary.com/c1oud9/image/upload/c_scale,h_1080/v1606857930/AdobeStock_367568464-min_sgxnoh.jpg"
              imgAlt="men"
              initialFlexPosition="flex-end"
              className="homepage-1st-section__top-part--image homepage-1st-section__top-part--image__man"
              introTitle="New Arrivals"
              introLinks={[
                {
                  id: uuidv4(),
                  title: "FEL!NA COLLECTION",
                  route: "/men/new-arrivals/felina-collection",
                  cName: "dropdown-links dropdown-links__important",
                  imgSrc:
                    "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GL55WDU90-JBLK",
                  imageClassName: "most-wanted-image ",
                },
                {
                  id: uuidv4(),
                  title: "Denim Season",
                  route: "/men/new-arrivals/denim-season",
                  cName: "dropdown-links",
                  imgSrc:
                    "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M1GXN1D4ED1-BDLD-ALT2",
                  imageClassName: "most-wanted-image",
                },
                {
                  id: uuidv4(),
                  title: "Sustainable Style",
                  route: "/men/new-arrivals/sustainable-style",
                  cName: "dropdown-links ",
                  imgSrc:
                    "https://img.guess.com/image/upload/f_auto,q_auto,fl_strip_profile,e_sharpen:50,,w_1024,c_scale/v1/EU/Style/ECOMM/M0BH25WDA00-TWHT",
                  imageClassName: "most-wanted-image",
                },
              ]}
            />
          )}
        />
        {menShopData.newArrival.subcategories.map((el) => (
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
        {menShopData.clothing.subcategories.map((el) => (
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
        {menShopData.bagsAccessories.subcategories.map((el) => (
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
        {menShopData.shoes.subcategories.map((el) => (
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
  menLinkData: selectMenLinkDataSection,
  menShopData: selectMenShopData,
});

export default connect(mapStateToProps)(Men);
