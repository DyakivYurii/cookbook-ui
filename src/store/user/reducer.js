import USER from './types';

const initialState = {
  name: '',
  email: '',
  status: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.GET_INFO_REQUEST: {
      return { ...initialState, status: 'request' };
    }
    case USER.GET_INFO_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        status: 'success'
      };
    }
    case USER.GET_INFO_FAILURE: {
      return { ...initialState, status: 'failure' };
    }

    case USER.MY_GET_INFO_REQUEST: {
      return { ...initialState, status: 'request' };
    }
    case USER.MY_GET_INFO_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        status: 'success'
      };
    }
    case USER.MY_GET_INFO_FAILURE: {
      return { ...initialState, status: 'failure' };
    }

    case USER.PUT_INFO_REQUEST: {
      return { ...state, status: 'request' };
    }
    case USER.PUT_INFO_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        status: 'success'
      };
    }
    case USER.PUT_INFO_FAILURE: {
      return { ...initialState, status: 'failure' };
    }

    case USER.DELETE_USER_REQUEST: {
      return { ...state, status: 'request' };
    }
    case USER.DELETE_USER_SUCCESS: {
      return {
        ...state,
        status: 'success'
      };
    }
    case USER.DELETE_USER_FAILURE: {
      return { ...initialState, status: 'failure' };
    }

    default: {
      return { ...initialState };
    }
  }
};

export default userReducer;
