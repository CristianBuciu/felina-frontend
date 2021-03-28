import React, { useState, Fragment } from "react";
import { BiGridSmall, BiGridHorizontal } from "react-icons/bi";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import "./CategoryDirectory.scss";

import PopUpModal from "../pop-up-modal/PopUpModal"

//! =============================================================================
const CategoryDirectory = ({ items, title, subTitle, match }) => {
  const [selectSmall, setSelectSmall] = useState(true);
  const [selectBig, setSelectBig] = useState(false);

  const handleSmallGrid = () => {
    setSelectSmall(true);
    setSelectBig(false);
  };
  const handleBigGrid = () => {
    setSelectSmall(false);
    setSelectBig(true);
  };
  const smallGrid = selectSmall ? "small-grid" : "";
  const bigGrid = selectBig ? "big-grid" : "";
  const activeSmall = smallGrid ? " active-grid-icon-small" : "";
  const activeBig = bigGrid ? " active-grid-icon-big" : "";

  return (
    <div className="category-directory">
      <h3 className="category-directory__sub-title">{subTitle}</h3>
      <h1 className="category-directory__title">{title}</h1>
      <div className="category-directory__top-navbar">
        {" "}
        <h3 className="category-directory__top-navbar--products">
          {items.length} PRODUCTS{" "}
        </h3>
        <div className="category-directory__top-navbar--grid-select">
          <BiGridSmall
            onClick={handleSmallGrid}
            className={`category-directory__top-navbar--grid-select__icon ${activeSmall}`}
          />
          <BiGridHorizontal
            onClick={handleBigGrid}
            className={`category-directory__top-navbar--grid-select__icon ${activeBig}`}
          />
        </div>
      </div>
      <div
        className={`category-directory__items-container ${smallGrid} ${bigGrid}`}
      >
        {items.map((item) => (
          <Fragment key={item.id} >
            <div

              className="category-directory__card"
            >
              <img
                className="category-directory__card--image"
                src={item.imgSrc}
                alt={item.title}
              />

              <div key={item.id} className="category-directory__card--pop-up">
                <div className="category-directory__card--pop-up__size-container">
                  <div className="category-directory__card--text-flex">
                    <span className="category-directory__card--text-flex__left">
                      {item.title}
                    </span>
                    <span className="category-directory__card--text-flex__right">
                      {item.price} €
                  </span>
                  </div>
                  <div className="category-directory__card--pop-up__size-container--size-symbol">
                    <h2 className="category-directory__card--pop-up__size-container--size-symbol__text">
                      AVAILABLE SIZES
                  </h2>
                    <div className="category-directory__card--pop-up__size-container--size-symbol__flex">
                      {item.availableSize.map((size, idx) => {
                        return size.quantity ? (
                          <span key={idx} className="">
                            {size.symbol}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>

                <PopUpModal key={item.id} item={item} size={item.availableSize} />

              </div>
            </div>

          </Fragment>
        ))}







      </div>
    </div >
  );
};

export default withRouter(CategoryDirectory);
