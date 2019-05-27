import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { PATH } from './constants/routes';
import SignIn from './view/pages/SignIn';
import SignUp from './view/pages/SignUp';
import MainPage from './view/pages/MainPage';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route path={PATH.SIGN_IN} component={SignIn} />
          <Route path={PATH.SIGN_UP} component={SignUp} />
          <Route path={PATH.HOME} exact component={MainPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
