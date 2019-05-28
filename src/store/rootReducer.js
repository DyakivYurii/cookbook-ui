import { combineReducers } from 'redux';

import recipesReducer from './recipes/reducer';
import authReducer from './auth/reducer';

export default combineReducers({
  recipes: recipesReducer,
  auth: authReducer
});
