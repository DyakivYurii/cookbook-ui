import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signIn, clearAuthReducer } from '../../store/auth/actions';

import { PATH } from '../../constants/routes';

import Navigation from '../containers/Navigation';
import Footer from '../components/Footer';
import Input from '../components/Controllers/Input';
import Button from '../components/Controllers/Button';

const SignIn = ({ history, auth, signIn, clearAuthReducer, ...rest }) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (auth.status === 'sign-in-success') {
      setShowError(false);
      clearAuthReducer();
      return history.push(PATH.HOME);
    }
    if (auth.status === 'sign-in-failure') {
      setShowError(true);
    }
  }, [auth, clearAuthReducer, history]);

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(user);
  };

  if (localStorage.getItem('token')) {
    return <Redirect to={PATH.HOME} />;
  }

  return (
    <React.Fragment>
      <Navigation />
      <SectionContainer>
        <Container>
          <Title>Sign In</Title>
          <Form method="POST" onSubmit={handleSubmit}>
            <Input
              inputType="formInput"
              type="email"
              value={user.email}
              name="email"
              onChange={handleInputChange}
              placeholder="E-mail"
              border
              minlength="3"
              maxlength="30"
            />
            <Input
              inputType="formInput"
              type="password"
              value={user.password}
              name="password"
              onChange={handleInputChange}
              placeholder="Password"
              border
              minlength="3"
            />
            <ErrorText show={showError}>Bad value</ErrorText>
            <SubmitButton type="submit" data-testid="sign-in">
              Sign In
            </SubmitButton>
          </Form>
        </Container>
      </SectionContainer>
      <Footer />
    </React.Fragment>
  );
};

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
  clearAuthReducer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signIn, clearAuthReducer }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

const SectionContainer = styled.div`
  flex: 1;
  position: relative;
  background-color: #fafafa;
`;

const Container = styled.section`
  box-sizing: border-box;
  width: 430px;
  padding: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 5px 0 #30303035;
  background-color: #fff;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 35px;
  padding: 0;
  font-size: 32px;
  line-height: 40px;
  font-weight: 300;
  text-align: center;
  color: #151515;
`;

const Form = styled.form``;

const ErrorText = styled.p`
  margin: 0;
  padding: 0;
  padding-left: 30px;
  padding-top: 15px;
  color: #e05555;

  ${(props) => {
    return props.show ? `display: block;` : `display: none;`;
  }}
`;

const SubmitButton = styled(Button)`
  margin-top: 35px;
`;
