import { call, all } from "redux-saga/effects";

import { onFetchCollectionsStart } from "./shop/shop-sagas";
import { userSagas } from "./user/user-sagas";
import { cartSagas } from "./cart/cart-sagas";

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart), call(userSagas), call(cartSagas)]);
}
