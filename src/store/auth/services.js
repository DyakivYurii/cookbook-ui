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

export const signUpAPI = ({ name, email, password }) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/signup`, {
      name,
      email,
      password
    })
    .then((result) => {
      return result.data.data[0];
    })
    .catch((error) => {
      throw new Error();
    });
};

export const signOutAPI = () => {
  return '';
};
