import React from "react";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import { RiShoppingBagLine } from "react-icons/ri";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsSubtotal,
  selectCartShow,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";

import { toggleCartShow } from "../../redux/cart/cart.actions";
import ReactDOM from "react-dom";
import "./CartDropdown.scss";


import { RiCloseFill } from "react-icons/ri";

const CartDropdown = ({
  route,
  cartItems,
  toggleCartShow,
  subtotal,
  showCart,
  itemCount,
  style,
}) => {
  //! ===========================================================================
  //!  Rounding to 2 digits function
  //! ===========================================================================
  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }
  //! =============================================================================

  //! =============================================================================
  //! React Spring fade

  //! =============================================================================
  return ReactDOM.createPortal(
    <div>
      <div style={style} className={`cart-dropdown`}>
        <div className="cart-dropdown__items--close">
          <RiCloseFill
            onClick={toggleCartShow}
            className="cart-dropdown__items--close__icon"
          />
        </div>
        {cartItems.length === 0 ? (
          <div style={style} className="cart-dropdown__empty">
            <RiShoppingBagLine className="cart-dropdown__empty--icon" />
            <h1 className="cart-dropdown__empty--title">
              YOUR SHOPPING BAG IS EMPTY.
            </h1>
          </div>
        ) : (
          <div className="cart-dropdown__items">
            <h2 className="cart-dropdown__items--header">
              You have {itemCount} items in your shopping bag
            </h2>
            {cartItems.map((cartItem) => (
              <div key={`a${cartItem.id}a`}>
                <CartItem key={`a${cartItem.id}c`} item={cartItem} />
              </div>
            ))}

            <p className="cart-dropdown__items--subtotal">
              <span className="cart-dropdown__items--subtotal__greyed">
                SUBTOTAL
              </span>{" "}
              <span className="cart-dropdown__items--subtotal__price">
                {roundToTwo(subtotal)} €
              </span>
            </p>
            <NavLink
              onClick={toggleCartShow}
              to={route}
              className="cart-dropdown__button"
            >
              GO TO CHECKOUT
            </NavLink>
          </div>
        )}
      </div>
      )
    </div>,
    document.getElementById("dropdown-cart-portal")
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  subtotal: selectCartItemsSubtotal,
  showCart: selectCartShow,
  itemCount: selectCartItemsCount,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCartShow: () => dispatch(toggleCartShow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
