import axios from 'axios';

export const getUserInfoAPI = ({ id }) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/users/user/${id}`);
};

export const getMyUserInfoAPI = ({ token }) => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/users/me`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((result) => {
      return result.data.data[0];
    });
};

export const putUserAPI = ({ token, userInfo }) => {
  return axios
    .put(
      `${process.env.REACT_APP_API_URL}/api/users/me`,
      { ...userInfo },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
    .then((result) => {
      return result.data.data[0];
    });
};

export const deleteUserAPI = ({ token }) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/users/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
