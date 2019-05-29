import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RecipesList from '../RecipesList';

const UserProfile = (props) => {
  const [user, setUser] = useState({
    name: props.user.name,
    email: props.user.email
  });

  useEffect(() => {
    props.getUserInfoByToken(localStorage.getItem('token'));
  }, []);

  useEffect(() => {}, [props.user]);

  return (
    <Wrapper>
      <Title>Your profile</Title>
      <UserInfo>
        <p>
          Name: <span>{props.user.name}</span>
        </p>
        <p>
          E-mail: <span>{props.user.email}</span>
        </p>
      </UserInfo>
      <RecipesList recipes={props.recipes} getRecipes={() => {}} />
    </Wrapper>
  );
};

UserProfile.propTypes = {
  recipes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getUserInfoByToken: PropTypes.func.isRequired
  // getUserRecipes: PropTypes.func.isRequired
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
