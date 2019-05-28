import USER from './types';

export const getUserInfoByToken = (token) => {
  return { type: USER.GET_INFO_REQUEST, payload: { token } };
};
