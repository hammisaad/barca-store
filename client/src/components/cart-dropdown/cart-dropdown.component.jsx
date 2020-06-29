import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleCart } from "../../redux/cart/cart-actions";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map(({ id, ...otherItemProps }) => (
            <CartItem key={id} {...otherItemProps} />
          ))}
        </div>
      ) : (
        <div className="empty-message">Your Cart is empty</div>
      )}

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
