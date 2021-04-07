//! Core
import React, { useState, Fragment } from "react";
import { Link, Route, withRouter, useHistory } from "react-router-dom";

//! Icons
import { BiGridSmall, BiGridHorizontal } from "react-icons/bi";

//! Components
import Product from "../../pages/product/Product";
//! =============================================================================
const CategoryDirectory = ({ items, path, title, subTitle }) => {
  const history = useHistory();
  const [selectSmall, setSelectSmall] = useState(false);
  const [selectBig, setSelectBig] = useState(true);

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
          <Fragment key={item.id}>
            <div
              className={
                smallGrid
                  ? "category-directory__card grid-card-big"
                  : "category-directory__card grid-card-small"
              }
            >
              <img
                className="category-directory__card--image"
                src={item.imgSrc}
                alt={item.title}
              />

              <div key={item.id} className="category-directory__card--pop-up">
                <div className="category-directory__card--pop-up__size-container">
                  <div
                    className={
                      smallGrid
                        ? "category-directory__card--text-flex card-small-text"
                        : "category-directory__card--text-flex card-big-text"
                    }
                  >
                    <span className="category-directory__card--text-flex__left">
                      {item.title}
                    </span>
                    <span className="category-directory__card--text-flex__right">
                      {item.price} €
                    </span>
                  </div>
                  <div
                    className={
                      smallGrid
                        ? "category-directory__card--pop-up__size-container--size-symbol small-symbol-grid"
                        : "category-directory__card--pop-up__size-container--size-symbol"
                    }
                  >
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

                <Link
                  to={`${path}/${item.id}`}
                  className="category-directory__card--button"
                >
                  ADD TO CART
                </Link>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default withRouter(CategoryDirectory);
