import { addItemToCart } from "./cart.utils";
import { removeItemFromCart } from "./cart.utils";

import cartTypes from "./cart.types";

const INITIAL_STATE = {
  isHidden: true,
  cartItems: [],
  error: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartTypes.REMOVE_ITEM_WITH_ARROW:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case cartTypes.CLEAR_CART_SUCCESS:
      return {
        ...state,
        cartItems: [],
      };
    case cartTypes.CLEAR_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
