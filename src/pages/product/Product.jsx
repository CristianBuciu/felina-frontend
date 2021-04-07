//! Core
import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

//! Redux
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { toggleCartShow } from "../../redux/cart/cart.actions";
//! =============================================================
const Product = ({ items }) => {
  //! Hooks
  const match = useRouteMatch();
  const dispatch = useDispatch();

  //! State
  const [selectedSize, setSelectedSize] = useState("");
  const [item, setItem] = useState({});

  // * Hooks for custom shake animation
  const [isClicked, setIsClicked] = useState(false);

  //! Find the item to display
  useEffect(() => {
    const foundItem = items.find((el) => el.id === match.params.id);
    if (foundItem) {
      setItem(foundItem);
      window.localStorage.setItem("product", JSON.stringify(foundItem));
    } else {
      const localStorageItem = JSON.parse(localStorage.getItem("product"));
      setItem(localStorageItem);
    }
  }, []);

  //! handlers
  const shake = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 400);
  };
  return (
    <div className="product-page">
      <div className="product-page__left">
        <img className="product-page__image" src={item.imgSrc} alt="product" />
      </div>
      <div className="product-page__right">
        <h1 className="product-page__title">{item.title}</h1>
        <p className="product-page__price">{item.price}€</p>
        <h3 className="product-page__size-title">Size</h3>
        <div className="product-page__size">
          {item.availableSize?.map((size) =>
            size.quantity ? (
              <span
                onClick={(e) => {
                  setSelectedSize(size.symbol);
                  item.selectedSize = size.symbol;
                }}
                key={size.size}
                className={
                  selectedSize === size.symbol
                    ? "product-page__size-text product-page__size-text--selected"
                    : "product-page__size-text"
                }
              >
                {size.symbol}
              </span>
            ) : size.quantity === 0 ? (
              <span
                title="Not Available"
                key={size.size}
                className=" product-page__size-text product-page__size-text--not-available"
              >
                {size.symbol}
              </span>
            ) : null
          )}
        </div>
        <hr style={{ marginTop: "4rem" }} />
        <div className="product-page__button-container">
          {selectedSize ? (
            <button
              onClick={() => {
                dispatch(addItem(item));
                dispatch(toggleCartShow());
                setTimeout(() => dispatch(toggleCartShow()), 1500);
              }}
              className="product-page__button"
            >
              ADD TO CART
            </button>
          ) : (
            <button
              onClick={shake}
              className={
                isClicked
                  ? "product-page__button--inactive product-page__button--inactive__shake"
                  : "product-page__button--inactive"
              }
            >
              SELECT SIZE FIRST
            </button>
          )}
        </div>
        <h3 className="product-page__description-title">Description</h3>

        <p className="product-page__description">{item.description}</p>
      </div>
    </div>
  );
};

export default Product;
