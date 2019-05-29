import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RecipesList from './RecipesList';

const UserProfile = (props) => {
  const [user, setUser] = useState({
    name: props.user.name,
    email: props.user.email
  });

  const [showCreatingRecipeForm, setShowCreatingRecipeForm] = useState(false);

  useEffect(() => {
    props.getUserInfoByToken(localStorage.getItem('token'));
  }, []);

  useEffect(() => {
    setUser({ name: props.user.name, email: props.user.email });
  }, [props.user]);

  const handleInputChange = (event) => {};

  const handleSubmit = (event) => {};

  const handleNewRecipe = (event) => {
    props.createRecipe(localStorage.getItem('token'), {
      title: 'Recipe',
      text: 'Some text'
    });
  };

  return (
    <Wrapper>
      <Title>Your profile</Title>
      <UserInfo>
        <Text>
          Name: <span>{user.name}</span>
        </Text>
        <Text>
          E-mail: <span>{user.email}</span>
        </Text>
      </UserInfo>
      <button type="button" onClick={handleNewRecipe}>
        Add new recipe
      </button>
      {/* <Background>
        <Form method="POST" onSubmit={handleSubmit}>
          <FormInput
            type="email"
            value={'user.email'}
            name="email"
            onChange={handleInputChange}
            placeholder="E-mail"
            border
            minlength="3"
            maxlength="30"
          />
          <FormInput
            type="password"
            value={'user.password'}
            name="password"
            onChange={handleInputChange}
            placeholder="Password"
            border
            minlength="3"
          />
          <ErrorText show={'showError'}>Bad value</ErrorText>
          <SubmitButton type="submit">Sign In</SubmitButton>
        </Form>
      </Background> */}
      <RecipesList recipes={props.recipes} getRecipes={() => {}} />
    </Wrapper>
  );
};

UserProfile.propTypes = {
  recipes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getUserInfoByToken: PropTypes.func.isRequired,
  createRecipe: PropTypes.func.isRequired
};

export default UserProfile;

const Wrapper = styled.div`
  padding: 0 15px;
  color: #303030;
  background-color: #fff;

  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 0 24px;
    width: 720px;
  }

  @media (min-width: 992px) {
    padding: 0 15px;
    width: 960px;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-top: 25px;
  margin-bottom: 15px;
  padding: 0;
  font-size: 32px;
  line-height: 40px;
  font-weight: 300;
  text-align: center;
  color: #000;
`;

const UserInfo = styled.div``;

const Text = styled.p``;

const Background = styled.div`
  background-color: #00000085;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// const Form = styled.form`
//   width: 300px;
//   height: 300px;
//   background-color: #fff;
// `;

const Form = styled.form`
  background-color: #fff;
`;

const FormInput = styled.input`
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

const SubmitButton = styled.button`
  margin-top: 35px;
`;
