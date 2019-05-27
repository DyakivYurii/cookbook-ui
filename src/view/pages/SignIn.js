import React, { useState } from 'react';
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Input from '../components/Controllers/Input';
import Button from '../components/Controllers/Button';

const SignIn = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <React.Fragment>
      <Navigation />
      <SectionContainer>
        <Container>
          <Title>Sign In</Title>
          <Form method="POST">
            {/* <Label>
              Write your Name */}
            <FormInput
              type="text"
              value={user.name}
              name="name"
              onChange={handleInputChange}
              placeholder="Name"
              border
            />
            {/* </Label> */}
            <FormInput
              type="email"
              value={user.email}
              name="email"
              onChange={handleInputChange}
              placeholder="E-mail"
              border
            />
            <FormInput
              type="password"
              value={user.password}
              name="password"
              onChange={handleInputChange}
              placeholder="Password"
              border
            />
            <SubmitButton type="submit">Sign In</SubmitButton>
          </Form>
        </Container>
      </SectionContainer>
      <Footer />
    </React.Fragment>
  );
};

export default SignIn;

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

const Label = styled.label`
  font-size: 14px;
`;

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

const SubmitButton = styled(Button)`
  margin-top: 35px;
`;

const Form = styled.form``;
