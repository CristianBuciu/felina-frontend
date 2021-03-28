import React from "react";

import { connect } from "react-redux";
import { toggleCartShow } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import {
  selectCartItemsCount,
  selectCartShow,
} from "../../redux/cart/cart.selectors";

const CartIcon = ({
  toggleCartShow,
  activeClass,
  cName,
  title,
  route,
  itemCount,
  showCart,
}) => {
  return (
    <div onClick={toggleCartShow} className="cart-icon">
      <div to={route} className={`${cName} ${activeClass} cart-icon__icon`}>
        {title}
        <span className="cart-icon__item-count">{itemCount}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartShow: () => dispatch(toggleCartShow()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  showCart: selectCartShow,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
