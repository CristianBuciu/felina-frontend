import React from "react";
import { Switch, Route } from "react-router-dom";
import { selectKidsLinkDataSection } from "../../redux/kidsLinkData/kidsLinkData.selectors";
import DropdownCustomMenu from "../../components/dropdown-menu/DropdownCustomMenu";
import CategoryHomepage from "../category-homepage/CategoryHomepage";
import { Spring } from "react-spring/renderprops.cjs";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//! =============================================================================
function Kids({ kidsLinkData }) {
  return (
    <div>
      <div className="categories-flex">
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
              className="directory-menu__top-part--image directory-menu__top-part--image__kids"
              style={{
                left: "2rem",
                backgroundImage:
                  "linear-gradient(to right,rgba(0, 0, 0, 0.7),rgba(45, 45, 45, 0.6),rgba(87, 87, 87, 0.4), rgba(133, 133, 133, 0.2), rgba(182, 182, 182, 0.01))",
              }}
            />
          )}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  kidsLinkData: selectKidsLinkDataSection,
});

export default connect(mapStateToProps)(Kids);
