import { takeEvery, call, put } from 'redux-saga/effects';
import AUTH from './types';

import { signInAPI, signUpAPI } from './services';

function* watcherRecipes() {
  yield takeEvery(AUTH.SIGN_IN_REQUEST, signInAsync);
  yield takeEvery(AUTH.SIGN_UP_REQUEST, signUpAsync);
}

function* signInAsync(action) {
  try {
    const result = yield call(signInAPI, action.payload.user);
    yield put({ type: AUTH.SIGN_IN_SUCCESS, payload: { token: result } });
  } catch (error) {
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

export default watcherRecipes;
