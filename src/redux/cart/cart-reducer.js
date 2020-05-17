const INITIAL_STATE = {
  isHidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
