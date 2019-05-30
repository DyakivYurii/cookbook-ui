import RECIPES from './types';

const initialState = {
  recipes: null,
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

    case RECIPES.SEARCH_REQUEST: {
      return { ...initialState, status: 'request' };
    }
    case RECIPES.SEARCH_SUCCESS: {
      return { recipes: action.payload.result, status: 'success' };
    }
    case RECIPES.SEARCH_FAILURE: {
      return { ...initialState, status: 'failure' };
    }

    case RECIPES.GET_SINGLE_REQUEST: {
      return { ...initialState, status: 'request' };
    }
    case RECIPES.GET_SINGLE_SUCCESS: {
      return { recipes: action.payload.result, status: 'success' };
    }
    case RECIPES.GET_SINGLE_FAILURE: {
      return { ...initialState, status: 'failure' };
    }

    case RECIPES.GET_MY_ALL_REQUEST: {
      return { ...initialState, status: 'request' };
    }
    case RECIPES.GET_MY_ALL_SUCCESS: {
      return { recipes: action.payload.result, status: 'success' };
    }
    case RECIPES.GET_MY_ALL_FAILURE: {
      return { ...initialState, status: 'failure' };
    }

    case RECIPES.GET_MY_SINGLE_REQUEST: {
      return { ...initialState, status: 'request' };
    }
    case RECIPES.GET_MY_SINGLE_SUCCESS: {
      return { recipes: action.payload.result, status: 'success' };
    }
    case RECIPES.GET_MY_SINGLE_FAILURE: {
      return { ...initialState, status: 'failure' };
    }

    case RECIPES.CREATE_REQUEST: {
      return { ...state, status: 'request' };
    }
    case RECIPES.CREATE_SUCCESS: {
      return { ...state, status: 'success' };
    }
    case RECIPES.CREATE_FAILURE: {
      return { ...state, status: 'failure' };
    }

    case RECIPES.UPDATE_SINGLE_REQUEST: {
      return { ...state, status: 'request' };
    }
    case RECIPES.UPDATE_SINGLE_SUCCESS: {
      return { ...state, status: 'success' };
    }
    case RECIPES.UPDATE_SINGLE_FAILURE: {
      return { ...state, status: 'failure' };
    }

    case RECIPES.DELETE_SINGLE_REQUEST: {
      return { ...state, status: 'request' };
    }
    case RECIPES.DELETE_SINGLE_SUCCESS: {
      return { ...state, status: 'success' };
    }
    case RECIPES.DELETE_SINGLE_FAILURE: {
      return { ...state, status: 'failure' };
    }

    default: {
      return { ...initialState };
    }
  }
};

export default recipesReducer;
