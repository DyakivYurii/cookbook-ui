import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { formatedDate } from '../../utils';
import { PATH } from '../../constants/routes';

import Button from './Controllers/Button';
import ModifyRecipeForm from '../components/ModifyRecipeForm';
import { getUserIdFromToken } from '../../utils';

const RecipeInfo = (props) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [showUpdateProfileForm, setShowUpdateProfileForm] = useState(false);
  const [updateRecipeInfo, setUpdateRecipeInfo] = useState(false);

  const userId = getUserIdFromToken();

  useEffect(() => {
    props.getRecip(props.id);
  }, []);

  useEffect(() => {
    if (props.recipes.status === 'success' && updateRecipeInfo === true) {
      props.getRecip(props.id);
      setUpdateRecipeInfo(false);
    }
  }, [props.recipes.status]);

  const handleOpenForm = (event) => {
    setShowUpdateProfileForm(true);
  };

  const handleCloseRecipeForm = (event) => {
    setShowUpdateProfileForm(false);
  };

  const handleDeletingRecipe = (event) => {
    props.deleteRecipe(localStorage.getItem('token'), props.id);
    setShouldRedirect(true);
  };

  return (
    <Wrapper>
      {shouldRedirect ? <Redirect to={PATH.HOME} /> : null}
      {props.recipes.recipes &&
        props.recipes.recipes.length &&
        props.recipes.recipes[0].recipe && (
          <Item>
            <ItemTitle>{props.recipes.recipes[0].recipe.title}</ItemTitle>
            <ItemDate>
              Created at:{' '}
              {formatedDate(props.recipes.recipes[0].recipe.date_creation)}
            </ItemDate>
            <ItemContent>{props.recipes.recipes[0].recipe.text}</ItemContent>
            {userId == props.recipes.recipes[0].recipe.author_id && (
              <React.Fragment>
                <ButtonSection>
                  <ButtonChange type="button" onClick={handleOpenForm}>
                    Change recipe
                  </ButtonChange>
                  <Button
                    type="button"
                    buttonType="delete"
                    onClick={handleDeletingRecipe}
                  >
                    Delete
                  </Button>
                </ButtonSection>
                <ModifyRecipeForm
                  recipes={props.recipes.recipes[0].recipe}
                  showForm={showUpdateProfileForm}
                  closeForm={handleCloseRecipeForm}
                  updateRecipe={props.updateRecipe}
                  setUpdateRecipeInfo={setUpdateRecipeInfo}
                />
              </React.Fragment>
            )}
            <SmallTitle>History of changes:</SmallTitle>
            {(props.recipes.recipes[0].history.length && (
              <List>
                {props.recipes.recipes[0].history.map((currentChanges) => {
                  return (
                    <Item key={currentChanges.id}>
                      <ItemTitle>{currentChanges.title}</ItemTitle>
                      <ItemDate>
                        Created at: {formatedDate(currentChanges.date_creation)}
                      </ItemDate>
                      <ItemContent>{currentChanges.text}</ItemContent>
                    </Item>
                  );
                })}
              </List>
            )) || <p>Does not have histroy of changes</p>}
          </Item>
        )}
    </Wrapper>
  );
};

RecipeInfo.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  history: PropTypes.object.isRequired,
  recipes: PropTypes.object.isRequired,
  getRecip: PropTypes.func.isRequired,
  updateRecipe: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired
};

export default RecipeInfo;

const Wrapper = styled.div`
  padding: 0 15px;
  color: #303030;
  background-color: #fff;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 720px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }
`;

const Item = styled.div`
  margin: 15px 0;
  padding: 10px 0;
`;

const ItemTitle = styled.h2`
  margin: 0;
  padding: 0;
  padding-top: 10px;
  font-size: 24px;
  line-height: 34px;
  font-weight: 300;
`;

const ItemDate = styled.small`
  display: inline-block;
  margin-top: 10px;
  color: #30303070;
`;

const ItemContent = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-size: 300;
`;

const SmallTitle = styled.h3`
  margin: 0;
  margin-top: 25px;
  margin-bottom: 15px;
  padding: 0;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  font-weight: 300;
  text-align: center;
  color: #000;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 35px;
  }
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
