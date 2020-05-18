import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ name, price, imageUrl, quantity }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <div className="price">{price}</div>

      <div className="remove-button">x</div>
    </div>
  );
};

export default CheckoutItem;
