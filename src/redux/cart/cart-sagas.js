import { takeLatest, put, call, all } from "redux-saga/effects";

import { clearCartSuccess, clearCartFailure } from "./cart-actions";
import userTypes from "../user/user.types";

export function* clearCart() {
  try {
    yield put(clearCartSuccess());
  } catch (error) {
    yield put(clearCartFailure(error));
  }
}

export function* onClearCart() {
  yield takeLatest(userTypes.SIGN_OUT_SUCCESS, clearCart);
}

export function* cartSagas() {
  yield all([call(onClearCart)]);
}
