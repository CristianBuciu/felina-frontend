import React, { useState } from "react";
import { Transition } from "react-spring/renderprops.cjs";
import { RiCloseFill } from "react-icons/ri";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions.js";
import { toggleCartShow } from "../../redux/cart/cart.actions.js";

// ?=============================================================================
// ?=============================================================================
// ?=============================================================================
//! =============================================================================

const PopUpModal = (props) => {
  const { addItem, item, size, toggleCartShow, showCart } = props;
  const { title, price, imgSrc, description } = item;
  const [showModal, setModal] = useState(false);
  //! =============================================================================
  // ? Hooks for custom shake animation
  const [isClicked, setIsClicked] = useState(false);

  const shake = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 400);
  };
  //! =============================================================================

  const handleClose = () => {
    setModal(false);
    setSelectedSize("");
  };
  const openModalHelper = () => (showCart ? toggleCartShow() : null);
  const [selectedSize, setSelectedSize] = useState("");

  const selectSize = (el) => {
    setSelectedSize(el.currentTarget.value);
    item.selectedSize = el.currentTarget.value;
  };

  return (
    <div>
      <Transition
        items={showModal}
        from={{ transform: "scale(0.2) translateX(-50%)", opacity: 0 }}
        enter={{ transform: "scale(1) translateX(-50%)", opacity: 1 }}
        leave={{ transform: "scale(0.2) translateX(-100%)", opacity: 0 }}
      >
        {(showModal) =>
          showModal &&
          ((props) => (
            <div>
              {showModal ? (
                <div>
                  <div className="category-directory-modal-overlay" />
                  <div className="category-directory-modal" style={props}>
                    <div className="category-directory-modal__header">
                      <div className="category-directory-modal__header--title">
                        <span className="category-directory-modal__header--title__main">
                          {title}
                        </span>{" "}
                        <br />
                        <span className="category-directory-modal__header--title__price">
                          {price} €
                        </span>{" "}
                        <span className="category-directory-modal__header--title__vat">
                          (VAT inc.)
                        </span>
                      </div>
                      <RiCloseFill
                        onClick={() => {
                          handleClose();
                        }}
                        className="category-directory-modal__header--close"
                      />
                    </div>
                    <hr />
                    <div className="category-directory-modal__body">
                      <img
                        className="category-directory-modal--image"
                        src={imgSrc}
                        alt={title}
                      />
                      <div className="category-directory-modal__description">
                        <h2 className="category-directory-modal__description--title">
                          DETAILS
                        </h2>
                        <p className="category-directory-modal__description--text">
                          {description}
                        </p>
                        <h2 className="category-directory-modal__description--title category-directory-modal__description--title__size">
                          SIZE
                        </h2>
                        <div className="category-directory-modal__description--button-container">
                          {size.map((el, idx) =>
                            el.quantity ? (
                              <label
                                className={
                                  selectedSize === el.symbol
                                    ? "category-directory-modal__description--button category-directory-modal__description--button__active"
                                    : "category-directory-modal__description--button"
                                }
                                key={idx}
                              >
                                <input
                                  className={
                                    "category-directory-modal__description--input"
                                  }
                                  type="radio"
                                  name="size-select"
                                  value={el.symbol}
                                  onClick={selectSize}
                                  required
                                />
                                {el.symbol}
                              </label>
                            ) : null
                          )}
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="category-directory-modal__button-container">
                      {selectedSize ? (
                        <button
                          onClick={() => {
                            handleClose();
                            addItem({ item });
                            toggleCartShow();
                            setTimeout(() => toggleCartShow(), 1500);
                          }}
                          className="category-directory-modal__button"
                        >
                          ADD TO CART
                        </button>
                      ) : (
                        <button
                          onClick={shake}
                          className={
                            isClicked
                              ? "category-directory-modal__button--inactive category-directory-modal__button--inactive__shake"
                              : "category-directory-modal__button--inactive"
                          }
                        >
                          SELECT SIZE FIRST
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))
        }
      </Transition>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item.item)),
  toggleCartShow: () => dispatch(toggleCartShow()),
});
const mapStateToProps = (state) => ({
  showCart: state.cart.showCart,
});
export default connect(mapStateToProps, mapDispatchToProps)(PopUpModal);
