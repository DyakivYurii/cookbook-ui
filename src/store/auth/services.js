import axios from 'axios';

export const signInAPI = ({ email, password }) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/signin`, { email, password })
    .then((result) => {
      return result.data.data;
    })
    .catch((error) => {
      throw new Error();
    });
};

export const signUpAPI = () => {};

export const signOutAPI = () => {
  return '';
};
