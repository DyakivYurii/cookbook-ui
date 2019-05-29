import AUTH from './types';

const initialState = {
  token: '',
  status: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SIGN_IN_REQUEST: {
      return { ...initialState, status: 'sign-in-request' };
    }
    case AUTH.SIGN_IN_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        status: 'sign-in-success'
      };
    }
    case AUTH.SIGN_IN_FAILURE: {
      return { ...initialState, status: 'sign-in-failure' };
    }

    case AUTH.SIGN_UP_REQUEST: {
      return { ...initialState, status: 'sign-up-request' };
    }
    case AUTH.SIGN_UP_SUCCESS: {
      return { status: 'sign-up-success' };
    }
    case AUTH.SIGN_UP_FAILURE: {
      return { ...initialState, status: 'sign-up-failure' };
    }

    case AUTH.SIGN_OUT: {
      return { ...initialState, status: 'sign-out-success' };
    }

    case AUTH.CLEAR_REDUCER: {
      return initialState;
    }

    default: {
      return { ...initialState };
    }
  }
};

export default authReducer;
