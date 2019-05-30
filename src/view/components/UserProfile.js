import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Controllers/Button';
import ChangeProfile from './ChangeProfile';
import NewRecipeForm from './NewRecipeForm';
import RecipesList from './RecipesList';

const UserProfile = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  const [showChangeProfileForm, setShowChangeProfileForm] = useState(false);
  const [changedUserInfo, setChangedUserInfo] = useState(false);

  const [showCreatingRecipeForm, setShowCreatingRecipeForm] = useState(false);
  const [addedNewRecipe, setAddedNewRecip] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    props.getUserInfoByToken(token);
    props.getUserRecipes(token);
  }, []);

  useEffect(() => {
    setUser({ name: props.user.name, email: props.user.email });
  }, [props.user]);

  useEffect(() => {
    if (props.recipes.status === 'success' && addedNewRecipe === true) {
      props.getUserRecipes(localStorage.getItem('token'));
      setAddedNewRecip(false);
    }
  }, [props.recipes.status]);

  useEffect(() => {
    if (props.user.status === 'success' && changedUserInfo === true) {
      const token = localStorage.getItem('token');
      props.getUserInfoByToken(token);
      props.getUserRecipes(token);
      setChangedUserInfo(false);
    }
  }, [props.user.status]);

  const handleOpenForm = (event) => {
    setShowCreatingRecipeForm(true);
  };

  const handleCloseRecipeForm = (event) => {
    setShowCreatingRecipeForm(false);
  };

  const handleOpenChangeUserForm = (event) => {
    setShowChangeProfileForm(true);
  };

  const handleCloseChangeUserForm = (event) => {
    setShowChangeProfileForm(false);
  };

  return (
    <Wrapper>
      <Title>Your profile</Title>
      <UserInfo>
        <Text>
          <Bold>Name</Bold>: {user.name}
        </Text>
        <Text>
          <Bold>E-mail</Bold>: {user.email}
        </Text>
      </UserInfo>
      <ButtonSection>
        <ButtonChange type="button" onClick={handleOpenChangeUserForm}>
          Change profile
        </ButtonChange>
        <Button type="button" onClick={handleOpenForm}>
          Add new recipe
        </Button>
      </ButtonSection>
      <ChangeProfile
        user={props.user}
        showForm={showChangeProfileForm}
        closeForm={handleCloseChangeUserForm}
        updateUser={props.putUser}
        setChangedUserInfo={setChangedUserInfo}
      />
      <NewRecipeForm
        showForm={showCreatingRecipeForm}
        closeForm={handleCloseRecipeForm}
        createRecipe={props.createRecipe}
        setAddedNewRecip={setAddedNewRecip}
      />
      <RecipesTitle>Your Recipes</RecipesTitle>
      <RecipesList recipes={props.recipes} getRecipes={() => {}} />
    </Wrapper>
  );
};

UserProfile.propTypes = {
  recipes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getUserInfoByToken: PropTypes.func.isRequired,
  getUserRecipes: PropTypes.func.isRequired,
  createRecipe: PropTypes.func.isRequired,
  putUser: PropTypes.func.isRequired
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

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000;
`;

const Bold = styled.span`
  font-weight: 500;
`;

const ButtonChange = styled(Button)`
  margin-bottom: 7px;
  color: #fff;
  background: #33f19e;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 50px;
  }
`;

const ButtonSection = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-right: 50px;
    width: 500px;
  }
`;

const RecipesTitle = styled.h3`
  margin: 0;
  margin-top: 35px;
  margin-bottom: 15px;
  padding: 0;
  font-size: 24px;
  line-height: 34px;
  font-weight: 300;
  text-align: center;
  color: #000;
`;
