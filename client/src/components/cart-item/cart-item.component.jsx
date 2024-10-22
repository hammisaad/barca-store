import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ name, price, imageUrl, quantity }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl[0]} alt="item" />
      <div className="details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
