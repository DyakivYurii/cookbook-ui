import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Provider } from 'react-redux';

import { PATH } from './constants/routes';
import store from './store/store';

import SignIn from './view/pages/SignIn';
import SignUp from './view/pages/SignUp';
import MainPage from './view/pages/MainPage';
import PrivateRoute from './view/components/PrivateRoute';
import Profile from './view/pages/Profile';
import Recipe from './view/pages/Recipe';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route path={PATH.SIGN_IN} component={SignIn} />
            <Route path={PATH.SIGN_UP} component={SignUp} />

            <PrivateRoute path={PATH.PROFILE} component={Profile} />

            <Route path={`${PATH.RECIPE}/:id`} component={Recipe} />
            <Route path={PATH.HOME} exact component={MainPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </Layout>
    </Provider>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
