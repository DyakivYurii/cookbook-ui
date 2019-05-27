import RECIPES from './types';

/**
 * Get all recipes from database sorted by created time
 */
export const getAllRecipes = () => {
  return { type: RECIPES.GET_ALL_REQUEST };
};
