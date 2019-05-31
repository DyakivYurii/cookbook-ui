import { takeEvery, call, put } from 'redux-saga/effects';
import RECIPES from './types';

import {
  getAllRecipesFromAPI,
  searchRecipesFromAPI,
  getRecipeAPI,
  getAllMyRecipesAPI,
  getMyRecipeAPI,
  createRecipeAPI,
  updateMyRecipeAPI,
  deleteMyRecipeAPI
} from './services';

function* watcherRecipes() {
  yield takeEvery(RECIPES.GET_ALL_REQUEST, getAllRecipesAsync);
  yield takeEvery(RECIPES.SEARCH_REQUEST, searchRecipesAsync);
  yield takeEvery(RECIPES.GET_SINGLE_REQUEST, getSingleRecipeAsync);
  yield takeEvery(RECIPES.GET_MY_ALL_REQUEST, getAllMyRecipesAsync);
  yield takeEvery(RECIPES.GET_MY_SINGLE_REQUEST, getMySingleRecipeAsync);
  yield takeEvery(RECIPES.CREATE_REQUEST, createRecipeAsync);
  yield takeEvery(RECIPES.UPDATE_SINGLE_REQUEST, updateRecipeAsync);
  yield takeEvery(RECIPES.DELETE_SINGLE_REQUEST, deleteRecipe);
}

function* getAllRecipesAsync(action) {
  try {
    const result = yield call(getAllRecipesFromAPI);
    yield put({ type: RECIPES.GET_ALL_SUCCESS, payload: { result } });
  } catch (error) {
    yield put({ type: RECIPES.GET_ALL_FAILURE });
  }
}

function* searchRecipesAsync(action) {
  try {
    const result = yield call(searchRecipesFromAPI, action.payload);
    yield put({ type: RECIPES.GET_ALL_SUCCESS, payload: { result } });
  } catch (error) {
    yield put({ type: RECIPES.GET_ALL_FAILURE });
  }
}

function* getSingleRecipeAsync(action) {
  try {
    const result = yield call(getRecipeAPI, action.payload);
    yield put({ type: RECIPES.GET_SINGLE_SUCCESS, payload: { result } });
  } catch (error) {
    yield put({ type: RECIPES.GET_SINGLE_FAILURE });
  }
}

function* getAllMyRecipesAsync(action) {
  try {
    const result = yield call(getAllMyRecipesAPI, action.payload);
    console.log(`we got it`, result);
    yield put({ type: RECIPES.GET_MY_ALL_SUCCESS, payload: { result } });
  } catch (error) {
    yield put({ type: RECIPES.GET_MY_ALL_FAILURE });
  }
}

function* getMySingleRecipeAsync(action) {
  try {
    const result = yield call(getMyRecipeAPI, action.payload);
    yield put({ type: RECIPES.GET_MY_SINGLE_SUCCESS, payload: { result } });
  } catch (error) {
    yield put({ type: RECIPES.GET_MY_SINGLE_FAILURE });
  }
}

function* createRecipeAsync(action) {
  try {
    yield call(createRecipeAPI, action.payload);
    yield put({ type: RECIPES.CREATE_SUCCESS });
  } catch (error) {
    yield put({ type: RECIPES.CREATE_FAILURE });
  }
}

function* updateRecipeAsync(action) {
  try {
    yield call(updateMyRecipeAPI, action.payload);
    yield put({ type: RECIPES.UPDATE_SINGLE_SUCCESS });
  } catch (error) {
    yield put({ type: RECIPES.UPDATE_SINGLE_FAILURE });
  }
}

function* deleteRecipe(action) {
  try {
    yield call(deleteMyRecipeAPI, action.payload);
    yield put({ type: RECIPES.DELETE_SINGLE_SUCCESS });
  } catch (error) {
    yield put({ type: RECIPES.DELETE_SINGLE_FAILURE });
  }
}

export default watcherRecipes;
