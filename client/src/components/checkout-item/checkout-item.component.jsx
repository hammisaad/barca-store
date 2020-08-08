import React from "react";

import { connect } from "react-redux";
import {
  removeItem,
  addItem,
  removeItemWithArrow,
} from "../../redux/cart/cart-actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  removeItem,
  addItem,
  removeItemWithArrow,
}) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <img className="item__img" src={imageUrl[0]} alt="item" />

      <span className="item__name">{name}</span>
      <div className="arrows">
        <i
          onClick={() => removeItemWithArrow(cartItem)}
          className="icofont-minus-circle"
        ></i>
        <i
          onClick={() => addItem(cartItem)}
          className="icofont-plus-circle"
        ></i>
      </div>
      <span className="item__quantity">
        <span className="value">{quantity} *</span>
      </span>
      <span className="item__price">${price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        <i className="icofont-ui-delete"></i>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItemWithArrow: (item) => dispatch(removeItemWithArrow(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
