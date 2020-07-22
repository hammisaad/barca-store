import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";

import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart-selectors";

import "./checkout-page.styles.scss";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";
import CustomButton from "../../components/custom-button/custom-button.component";

const CheckoutPage = ({ cartItems, total }) => {
  let history = useHistory();
  return (
    <div className="checkout-page">
      {cartItems.length ? (
        <React.Fragment>
          <div className="cart-items">
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
          </div>
          <div className="total">${total}</div>
          <div className="stripe">
            <StripeButton price={total}>pay with stripe</StripeButton>
          </div>
        </React.Fragment>
      ) : (
        <div className="empty-checkout-page">
          <h2>Oops! your cart is empty ! 0.o</h2>
          <CustomButton onClick={() => history.push("/")}>
            go home!
          </CustomButton>
        </div>
      )}
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStatetoProps)(CheckoutPage);
