import scrollbarTypes from "./scrollbar.types";

const INITIAL_STATE = {
  activeDiv: 0,
};

const scrollbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case scrollbarTypes.SET_ACTIVE_SCROLLBAR:
      return {
        ...state,
        activeDiv: action.payload,
      };
    default:
      return state;
  }
};

export default scrollbarReducer;
