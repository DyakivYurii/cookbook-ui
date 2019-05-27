import RECIPES from './types';

const initialState = {
  recipes: [],
  status: null
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPES.GET_ALL_REQUEST: {
      return { ...initialState, status: 'request' };
    }
    case RECIPES.GET_ALL_SUCCESS: {
      return { recipes: action.payload.result, status: 'success' };
    }
    case RECIPES.GET_ALL_FAILURE: {
      return { ...initialState, status: 'failure' };
    }
    default: {
      return { ...initialState };
    }
  }
};

export default recipesReducer;
