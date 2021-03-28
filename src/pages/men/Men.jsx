import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Men.scss";
import CategoryDirectory from "../../components/category-directory/CategoryDirectory";
import DropdownCustomMenu from "../../components/dropdown-menu/DropdownCustomMenu";
import CategoryHomepage from "../category-homepage/CategoryHomepage";

import { connect } from "react-redux";
import { selectMenLinkDataSection } from "../../redux/menLinkData/menLinkData.selectors";
import { createStructuredSelector } from "reselect";

function Men({ menLinkData }) {
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
        <Route
          exact
          path="/men/new-arrivals/felina-collection"
          render={() => <CategoryDirectory />}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  menLinkData: selectMenLinkDataSection,
});

export default connect(mapStateToProps)(Men);
