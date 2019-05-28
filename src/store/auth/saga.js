import { takeEvery, call, put } from 'redux-saga/effects';
import AUTH from './types';

import { signInAPI, signUpAPI, signOutAPI } from './services';

function* watcherRecipes() {
  yield takeEvery(AUTH.SIGN_IN_REQUEST, signInAsync);
  yield takeEvery(AUTH.SIGN_UP_REQUEST, signUpAsync);
  yield takeEvery(AUTH.SIGN_OUT_REQUEST, signOutAsync);
}

function* signInAsync(action) {
  try {
    const result = yield call(signInAPI, action.payload.user);
    yield put({ type: AUTH.SIGN_IN_SUCCESS, payload: { token: result } });
  } catch (error) {
    yield console.log(`Error`);
    yield put({ type: AUTH.SIGN_IN_FAILURE });
  }
}

function* signUpAsync(action) {
  try {
    const result = yield call(signUpAPI, action.payload.user);
    yield put({ type: AUTH.SIGN_UP_SUCCESS, payload: { result: result } });
  } catch (error) {
    yield put({ type: AUTH.SIGN_UP_FAILURE });
  }
}

function* signOutAsync(action) {
  try {
    const result = yield call(signOutAPI);
    yield put({ type: AUTH.SIGN_OUT_SUCCESS, payload: { result: result } });
  } catch (error) {
    yield put({ type: AUTH.SIGN_OUT_FAILURE });
  }
}

export default watcherRecipes;
