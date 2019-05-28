import axios from 'axios';

export const getUserInfoAPI = ({ token }) => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}//api/users/me`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((result) => {
      console.log(`Got a data`, result);
      return result.data.data;
    })
    .catch((error) => {
      throw new Error();
    });
};
