import { takeEvery, call, put } from 'redux-saga/effects';
import USER from './types';

import {
  getUserInfoAPI,
  getMyUserInfoAPI,
  putUserAPI,
  deleteUserAPI
} from './services';

function* watcherRecipes() {
  yield takeEvery(USER.GET_INFO_REQUEST, getUserInfoAsync);
  yield takeEvery(USER.MY_GET_INFO_REQUEST, getMyUserInfoAsync);
  yield takeEvery(USER.PUT_INFO_REQUEST, putUserAsync);
  yield takeEvery(USER.DELETE_USER_REQUEST, deleteUserAsync);
}

function* getUserInfoAsync(action) {
  try {
    const user = yield call(getUserInfoAPI, action.payload);
    yield put({
      type: USER.GET_INFO_SUCCESS,
      payload: { name: user.name, email: user.email }
    });
  } catch (error) {
    yield put({ type: USER.GET_INFO_FAILURE });
  }
}

function* getMyUserInfoAsync(action) {
  try {
    const user = yield call(getMyUserInfoAPI, action.payload);
    yield put({
      type: USER.GET_INFO_SUCCESS,
      payload: { name: user.name, email: user.email }
    });
  } catch (error) {
    yield put({ type: USER.GET_INFO_FAILURE });
  }
}

function* putUserAsync(action) {
  try {
    yield call(putUserAPI, action.payload);
    yield put({ type: USER.PUT_INFO_SUCCESS });
  } catch (error) {
    yield put({ type: USER.PUT_INFO_FAILURE });
  }
}

function* deleteUserAsync(action) {
  try {
    yield call(deleteUserAPI, action.payload);
    yield put({ type: USER.DELETE_USER_SUCCESS });
  } catch (error) {
    yield put({ type: USER.DELETE_USER_FAILURE });
  }
}

export default watcherRecipes;
