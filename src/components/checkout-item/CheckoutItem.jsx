import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
const CheckoutItem = ({
  item,
  clearItem,
  addItemToCart,
  removeItemFromCart,
}) => {
  return (
    <div className="checkout-page__main--items__table-top">
      <div className="checkout-page__main--items__table-top--left">
        <div className="checkout-page__main--items__item">
          <img
            className="checkout-page__main--items__item--image"
            src={item.imgSrc}
            alt={item.title}
          />
          <div className="checkout-page__main--items__item--details">
            <h4 className="checkout-page__main--items__item--details__title">
              {item.title}
            </h4>
            <span className="checkout-page__main--items__item--details__greyed">
              Size:{" "}
            </span>
            <span className="checkout-page__main--items__item--details__span-size">
              <b>{item.selectedSize}</b>
            </span>{" "}
            <br />
          </div>
        </div>
      </div>
      <div className="checkout-page__main--items__table-top--title">
        <span className="checkout-page__main--items__table-top--title__quantity">
          <AiFillMinusCircle
            onClick={() => {
              removeItemFromCart(item);
            }}
            className="checkout-page__main--items__table-top--title__quantity--icon"
          />
          <b> {item.quantity} </b>{" "}
          <AiFillPlusCircle
            onClick={() => {
              addItemToCart(item);
            }}
            className="checkout-page__main--items__table-top--title__quantity--icon"
          />{" "}
        </span>
      </div>
      <h3 className="checkout-page__main--items__table-top--title">
        <span
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
          className="checkout-page__main--items__table-top--title__quantity"
        >
          {" "}
          <b>{item.price} &nbsp;€</b>
        </span>
        <span
          onClick={() => clearItem(item)}
          className="checkout-page__main--items__item--details__delete-btn"
        >
          <RiDeleteBin6Line />{" "}
          <i className="checkout-page__main--items__item--details__delete-btn--text">
            Remove
          </i>
        </span>
      </h3>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItem(item)),
  removeItemFromCart: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
