import axios from 'axios';

export const signInAPI = ({ email, password }) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/signin`, { email, password })
    .then((result) => {
      localStorage.setItem('token', `${result.data.data}`);
      return result.data.data;
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
    });
};
