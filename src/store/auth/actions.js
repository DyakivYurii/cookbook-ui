import AUTH from './types';

/**
 *
 */
export const signIn = (user) => {
  return { type: AUTH.SIGN_IN_REQUEST, payload: { user } };
};

export const signUp = (user) => {
  return { type: AUTH.SIGN_UP_REQUEST, payload: { user } };
};

export const signOut = () => {
  return { type: AUTH.SIGN_OUT_REQUEST };
};
