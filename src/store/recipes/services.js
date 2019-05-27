import axios from 'axios';

export const getAllRecipesFromAPI = () => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/recipes`)
    .then((result) => {
      return result.data.data;
    })
    .catch((error) => {
      return error;
    });
};
