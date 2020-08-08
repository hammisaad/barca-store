export const toggleCart = () => ({
  type: "TOGGLE_CART",
});

export const openCart = () => ({
  type: "OPEN_CART",
});

export const closeCart = () => ({
  type: "CLOSE_CART",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});

export const removeItemWithArrow = (item) => ({
  type: "REMOVE_ITEM_WITH_ARROW",
  payload: item,
});

export const clearCartSuccess = () => ({
  type: "CLEAR_CART_SUCCESS",
});

export const clearCartFailure = (error) => ({
  type: "CLEAR_CART_FAILURE",
  payload: error,
});
