import React, { useState } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { openCart, closeCart } from "../../redux/cart/cart-actions";
import {
  selectCartItemsCount,
  selectCartHidden,
} from "../../redux/cart/cart-selectors";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ openCart, closeCart, selectCartHidden, itemCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  function openCartIntern() {
    setIsOpen(true);
    openCart();
  }
  function closeCartIntern() {
    setIsOpen(false);
    closeCart();
  }
  return (
    <div
      className="cart-icon"
      onClick={() => (isOpen ? closeCartIntern() : openCartIntern())}
    >
      <ShoppingIcon className="shopping-icon" />
      <div className="item-count"> {itemCount} </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  cartState: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  openCart: () => dispatch(openCart()),
  closeCart: () => dispatch(closeCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
