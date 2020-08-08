import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  errors: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errors: [],
      };
    case userTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errors: [],
      };
    case userTypes.SIGN_IN_FAILURE:
    case userTypes.SIGN_OUT_FAILURE:
    case userTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
