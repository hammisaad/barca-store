import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_MGtELBqlMLLgXuoSymMfmKpF00jBYdvQOL";

  const onToken = (token) => {
    axios
      .post("/payment", {
        amount: priceForStripe,
        token,
      })
      .then(function (response) {
        alert("payement is successful");
      })
      .catch(function (error) {
        alert("payement failed, please use the provided test card");
        console.log(error);
      });
  };

  return (
    <StripeCheckout
      name="FCBarcelona official store." // the pop-in header title
      image="https://sendeyo.com/up/d/f3eb2117da" // the pop-in header image (default none)
      ComponentClass="div"
      label="Pay with Card" // text inside the Stripe button
      panelLabel="pay for" // prepended to the amount in the bottom pay button
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
