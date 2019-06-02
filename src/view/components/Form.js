import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Input from '../components/Controllers/Input';
import Button from '../components/Controllers/Button';

const Form = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (props.auth.status === 'sign-in-success') {
      setShowError(false);
      props.clearAuthReducer();
      return props.history.push(PATH.HOME);
    }
    if (props.auth.status === 'sign-in-failure') {
      setShowError(true);
    }
  }, [props.auth]);

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signIn(user);
  };

  return (
    <SectionContainer>
      <Container>
        <Title>Sign In</Title>
        <Form method="POST" onSubmit={props.handleSubmit}>
          <FormInput
            type="email"
            value={user.email}
            name="email"
            onChange={handleInputChange}
            placeholder="E-mail"
            border
            minlength="3"
            maxlength="30"
          />
          <FormInput
            type="password"
            value={user.password}
            name="password"
            onChange={handleInputChange}
            placeholder="Password"
            border
            minlength="3"
          />
          <ErrorText show={showError}>Bad value</ErrorText>
          <SubmitButton type="submit">Sign In</SubmitButton>
        </Form>
      </Container>
    </SectionContainer>
  );
};

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired
};

export default Form;

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

const FormInput = styled(Input)`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 15px;
  box-shadow: none;
  border: 1px solid #25252540;

  &::placeholder {
    color: #30303070;
  }

  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
`;

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
