import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import {
  selectCartItems,
  selectCartItemsSubtotal,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import "./Checkout.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StripeCheckoutButton from "../../components/stripe-button/StripeButton";
const Checkout = ({
  currentUser,

  cartItems,
  subtotal,
  itemCount,
}) => {
  gsap.registerPlugin(ScrollTrigger);
  const purchaseRef = useRef(null);
  const itemsRef = useRef(null);
  const itemsTableTopRef = useRef(null);
  useEffect(() => {
    gsap.to(
      purchaseRef.current,
      {
        scrollTrigger: {
          trigger: itemsRef.current,
          start: "top top+=10%",
          end: "bottom",

          pin: purchaseRef.current,
          // markers: true,
          scrub: 1,
        },

        duration: 1,
      },
      []
    );

    gsap.to(
      itemsTableTopRef.current,
      {
        scrollTrigger: {
          trigger: itemsTableTopRef.current,
          start: "top top+=4.5%",
          end: "bottom -100%",
          toggleActions: "play none none restart",
          pin: true,
          // markers: true,
          // scrub: 1,
        },

        duration: 1,
      },
      []
    );
  });
  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }
  return (
    <div className="checkout-page">
      <h1 className="checkout-page__title">SHOPPING BAG</h1>
      <div className="checkout-page__header">
        {currentUser ? (
          <p className="checkout-page__greeting-message">
            Hello{" "}
            <span className="checkout-page__greeting-message--user">
              {currentUser.displayName}
            </span>
            , you are ordering as:{" "}
            <span className="checkout-page__greeting-message--user">
              {currentUser.email}.
            </span>
          </p>
        ) : (
            <p className="checkout-page__greeting-message">
              Hello stranger. You should log in so you can finish your purchase.
            </p>
          )}
      </div>

      <div className="checkout-page__main">
        <div ref={itemsRef} className="checkout-page__main--items">
          <div
            style={{ backgroundColor: "rgb(245, 245, 245)" }}
            ref={itemsTableTopRef}
            className="checkout-page__main--items__table-top"
          >
            <h2
              style={{ textAlign: "start" }}
              className="checkout-page__main--items__title"
            >
              YOU HAVE {itemCount} ITEMS IN YOUR SHOPPING BAG
            </h2>
            <h3 className="checkout-page__main--items__table-top--flex">
              Quantity
            </h3>
            <h3 className="checkout-page__main--items__table-top--flex">
              Price
            </h3>
          </div>

          {cartItems.map((item) => (
            <CheckoutItem key={item.id} item={item} />
          ))}
        </div>

        <div ref={purchaseRef} className="checkout-page__main--price-details">
          <div className="checkout-page__main--price-details__flex">
            <span>Subtotal</span>
            <span>
              <b>{roundToTwo(subtotal)} €</b>
            </span>
          </div>
          <div className="checkout-page__main--price-details__flex">
            <span>
              Shipping <br />{" "}
              <i style={{ color: "black", fontSize: "1.6rem" }}>
                Standard Delivery in 4-6 working days
              </i>
            </span>
            <span>
              {" "}
              <b>Free</b>
            </span>
          </div>
          <hr />
          <div className="checkout-page__main--price-details__flex">
            <span style={{ fontSize: "2rem" }}>
              <b>Total</b>
            </span>
            <span style={{ fontSize: "2rem" }}>
              <b>{roundToTwo(subtotal)} €</b>
            </span>
          </div>
          <div


          >
            <div style={{ color: "red", fontSize: "1.2rem", marginBottom: "2rem" }}>
              <p>*Please use the following test credit card for payments*</p>
              <p>4242 4242 4242 4242 <br /> Exp: 01/20 <br /> CVV:123 </p>
            </div>
            <StripeCheckoutButton className="checkout-page__main--price-details__btn" price={roundToTwo(subtotal)} />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
  subtotal: selectCartItemsSubtotal,
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps)(Checkout);
