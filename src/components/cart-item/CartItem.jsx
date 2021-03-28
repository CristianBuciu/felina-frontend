import React from "react";

import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = ({ item, clearItem }) => {
  const { imgSrc, price, quantity, selectedSize, title } = item;
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imgSrc} alt={title} className="cart-item__image" />

        <div className="cart-item__details">
          <h3 className="cart-item__details--title">{title}</h3>
          <div className="cart-item__details--size-quantity-price">
            <span className="cart-item__details--span-price">
              <b>{price} €</b>
            </span>
            <br />
            <span className="cart-item__details--greyed">Size: </span>
            <span className="cart-item__details--span-size">
              <b>{selectedSize}</b>
            </span>{" "}
            <br />{" "}
            <span className="cart-item__details--greyed">Quantity: </span>
            <span className="cart-item__details--span-size">
              {" "}
              <b>{quantity}</b>{" "}
            </span>
          </div>
        </div>
      </div>
      <span onClick={() => clearItem(item)} className="cart-item__delete-btn">
        <RiDeleteBin6Line />{" "}
        <b className="cart-item__delete-btn--text">Remove</b>
      </span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});
export default connect(null, mapDispatchToProps)(CartItem);
