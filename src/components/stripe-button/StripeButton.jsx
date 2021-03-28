import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import "./StripeButton.scss";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishebleKey = "pk_test_51I1yhvKmivknkiJOBXaWFBfu8kto1Y4i4hY2E1DvULFBwjnDdPjnw9tENSBhnwMlq99L0LZ6XZAVbbHLktnaa0jN00ryMKiajd";
    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="FEL!NA FASHION Ltd."
            billingAddress
            shippingAddress
            description={`Your total is ${price} €`}
            amount={priceForStripe}
            panelLabel="PAY NOW"
            token={onToken}
            stripeKey={publishebleKey}
            currency="eur"
        />
    )
}

export default StripeCheckoutButton;