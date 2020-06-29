import { call, all, takeLatest, put } from "redux-saga/effects";

import userTypes from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

import {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
} from "./user-actions";

// sign up logic
export function* signUp({
  payload: { displayName, email, password, confirmPassword },
}) {
  if (password !== confirmPassword) {
    yield put(signUpFailure("Passwords do not match!"));
    return;
  }
  const { user } = yield auth.createUserWithEmailAndPassword(email, password);
  try {
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUp() {
  yield takeLatest(userTypes.SIGN_UP_START, signUp);
}

// sign in logic
export function* getSnapshotFromUserRef(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInAfterSigUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserRef(user, additionalData);
}

export function* signInGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserRef(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* signInEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserRef(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onSignInAfterSignUp() {
  yield takeLatest(userTypes.SIGN_UP_SUCCESS, signInAfterSigUp);
}

export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInEmail);
}

// user persistence logic
export function* checkUserSession() {
  try {
    const userAuth = getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserRef(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, checkUserSession);
}

// sign out logic
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure());
  }
}

export function* onSignOut() {
  yield takeLatest(userTypes.SIGN_OUT_START, signOut);
}

// listenning to and exporting all user sagas to the root saga
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOut),
    call(onSignUp),
    call(onSignInAfterSignUp),
  ]);
}
