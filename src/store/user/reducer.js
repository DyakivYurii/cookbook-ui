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

    default: {
      return { ...initialState };
    }
  }
};

export default userReducer;
