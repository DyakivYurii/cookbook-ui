import RECIPES from './types';

/**
 * Get all recipes from database sorted by created time
 */
export const getAllRecipes = () => {
  return { type: RECIPES.GET_ALL_REQUEST };
};

export const getRecip = (id) => {
  return { type: RECIPES.GET_SINGLE_REQUEST, payload: { id } };
};

export const getAllMyRecipes = (token) => {
  return { type: RECIPES.GET_MY_ALL_REQUEST, payload: { token } };
};

export const getMyRecipe = (token, id) => {
  return { type: RECIPES.GET_MY_SINGLE_REQUEST, payload: { token, id } };
};

export const createRecipe = (token, recipe) => {
  return { type: RECIPES.CREATE_REQUEST, payload: { token, recipe } };
};

export const updateRecipe = (token, id, recipe) => {
  return {
    type: RECIPES.UPDATE_SINGLE_REQUEST,
    payload: { token, id, recipe }
  };
};

export const deleteRecipe = (token, id) => {
  return { type: RECIPES.DELETE_SINGLE_REQUEST, payload: { token, id } };
};
