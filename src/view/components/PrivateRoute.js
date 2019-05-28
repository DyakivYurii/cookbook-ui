import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { PATH } from '../../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userToken = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={(props) => {
        return userToken ? (
          <Component {...props} />
        ) : (
          <Redirect to={PATH.HOME} />
        );
      }}
    />
  );
};

export default PrivateRoute;
