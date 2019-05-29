import { takeEvery, call, put } from 'redux-saga/effects';
import RECIPES from './types';

import { getAllRecipesFromAPI } from './services';

function* watcherRecipes() {
  yield takeEvery(RECIPES.GET_ALL_REQUEST, getAllRecipesAsync);
}

function* getAllRecipesAsync(action) {
  try {
    const result = yield call(getAllRecipesFromAPI);
    yield put({ type: RECIPES.GET_ALL_SUCCESS, payload: { result: result } });
  } catch (error) {
    yield put({ type: RECIPES.GET_ALL_FAILURE });
  }
}

export default watcherRecipes;
