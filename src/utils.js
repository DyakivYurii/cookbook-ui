export const formatedDate = (date) => {
  return `${date.slice(0, 10)} ${date.slice(11, 19)}`;
};

export const getUserIdFromToken = () => {
  try {
    const token = localStorage.getItem('token');
    const splitedToken = token.split('.');
    return JSON.parse(window.atob(splitedToken[1]))._id;
  } catch (error) {
    return error;
  }
};
