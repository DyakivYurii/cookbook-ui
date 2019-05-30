import axios from 'axios';

/**
 * get all recipes
 */
export const getAllRecipesFromAPI = () => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/recipes`)
    .then((result) => {
      return result.data.data;
    });
};

export const searchRecipesFromAPI = ({ searchedValue }) => {
  return axios
    .get(
      `${process.env.REACT_APP_API_URL}/api/recipes/?search=${searchedValue}`
    )
    .then((result) => {
      return result.data.data;
    });
};

/**
 * Get recipe not auth user
 */
export const getRecipeAPI = ({ id }) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/recipes/recipe/${id}`);
};

/**
 * Get all my recipes
 */
export const getAllMyRecipesAPI = ({ token }) => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/recipes/me`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((result) => {
      return result.data.data;
    });
};

/**
 * Create recipe
 */
export const createRecipeAPI = ({ token, recipe }) => {
  return axios.post(
    `${process.env.REACT_APP_API_URL}/api/recipes/me`,
    {
      ...recipe
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

/**
 * Get my specific recipe
 */
export const getMyRecipeAPI = ({ token, id }) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/api/recipes/me/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

/**
 * Update my recipe
 */
export const updateMyRecipeAPI = ({ token, id, recipe }) => {
  return axios.put(
    `${process.env.REACT_APP_API_URL}/api/recipes/me/${id}`,
    {
      ...recipe
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

/**
 * delete my recipe
 */
export const deleteMyRecipeAPI = ({ token, id }) => {
  return axios.delete(`${process.env.REACT_APP_API_URL}/api/recipes/me/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
