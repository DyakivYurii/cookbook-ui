import USER from './types';

/**
 * Get user by id
 *
 * @param {Number} id - user id
 */
export const getUserInfo = (id) => {
  return { type: USER.GET_INFO_REQUEST, payload: { id } };
};

/**
 * Get user by token
 *
 * @param {String} token - user token
 */
export const getUserInfoByToken = (token) => {
  return { type: USER.MY_GET_INFO_REQUEST, payload: { token } };
};

/**
 * Put new info to a user
 *
 * @param {String} token - user token
 * @param {Object} userInfo - user inof for updating
 */
export const putUser = (token, userInfo) => {
  return { type: USER.PUT_INFO_REQUEST, payload: { token, userInfo } };
};

/**
 * Delete user by token
 *
 * @param {String} token - user token
 */
export const deleteUser = (token) => {
  return { type: USER.DELETE_USER_REQUEST, payload: { token } };
};
