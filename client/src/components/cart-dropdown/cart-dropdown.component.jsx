import React, { useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleCart } from "../../redux/cart/cart-actions";

import useOutsideClick from "../../effects/use-OutsideClick.effect";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, dispatch);

  return (
    <div ref={wrapperRef} className="cart-dropdown">
      {cartItems.length ? (
        <React.Fragment>
          {" "}
          <div className="cart-items">
            {cartItems.map(({ id, ...otherItemProps }) => (
              <CartItem key={id} {...otherItemProps} />
            ))}
          </div>
          <CustomButton
            onClick={() => {
              history.push("/checkout");
              dispatch(toggleCart());
            }}
          >
            Go to checkout
          </CustomButton>
        </React.Fragment>
      ) : (
        <div className="empty-message">Your Cart is empty</div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
