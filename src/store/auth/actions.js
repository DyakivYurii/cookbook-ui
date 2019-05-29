import AUTH from './types';

export const signIn = (user) => {
  return { type: AUTH.SIGN_IN_REQUEST, payload: { user } };
};

export const signUp = (user) => {
  return { type: AUTH.SIGN_UP_REQUEST, payload: { user } };
};

export const signOut = () => {
  localStorage.removeItem('token');
  return { type: AUTH.SIGN_OUT };
};

export const clearAuthReducer = () => {
  return { type: AUTH.CLEAR_REDUCER };
};
