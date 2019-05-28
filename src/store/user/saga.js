import { takeEvery, call, put } from 'redux-saga/effects';
import USER from './types';

import { getUserInfoAPI } from './services';

function* watcherRecipes() {
  yield takeEvery(USER.GET_INFO_REQUEST, getUserInfoAsync);
}

function* getUserInfoAsync(action) {
  try {
    const user = yield call(getUserInfoAPI, action.payload.token);
    yield put({ type: USER.GET_INFO_SUCCESS, payload: { user } });
  } catch (error) {
    yield put({ type: USER.GET_INFO_FAILURE });
  }
}

export default watcherRecipes;
