import { takeEvery, call, put } from 'redux-saga/effects';
import USER from './types';

import { getUserInfoAPI } from './services';

function* watcherRecipes() {
  yield takeEvery(USER.GET_INFO_REQUEST, getUserInfoAsync);
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

export default watcherRecipes;
