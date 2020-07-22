import scrollbarTypes from "./scrollbar.types";

export const setActiveDiv = (div) => ({
  type: scrollbarTypes.SET_ACTIVE_SCROLLBAR,
  payload: div,
});
