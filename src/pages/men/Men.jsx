//! Core packages
import React from "react";
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

function Men({ menLinkData, menShopData }) {
  return (
    <div>
      <div className="categories-flex">
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
              className="directory-menu__top-part--image directory-menu__top-part--image__man"
              style={{
                left: "2rem",
                backgroundImage:
                  "linear-gradient(to right,rgba(0, 0, 0, 0.7),rgba(45, 45, 45, 0.6),rgba(87, 87, 87, 0.4), rgba(133, 133, 133, 0.2), rgba(182, 182, 182, 0.01))",
              }}
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
