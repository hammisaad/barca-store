import React from "react";
import "./checkout-page.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart-selectors";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="header">
        <div className="header-block">Name</div>
        <div className="header-block">Description</div>
        <div className="header-block">price</div>
        <div className="header-block">quantity</div>
        <div className="header-block">Remove</div>
      </div>
      <div className="cart-items">
        {cartItems.map(({ id, ...otherItemProps }) => (
          <CheckoutItem key={id} {...otherItemProps} />
        ))}
      </div>
      <div className="total">${total}</div>
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStatetoProps)(CheckoutPage);
