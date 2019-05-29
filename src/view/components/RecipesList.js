import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Controllers/Button';

const RecipesList = (props) => {
  const formatedDate = (date) => {
    return `${date.slice(0, 10)} ${date.slice(11, 19)}`;
  };

  console.log(props);

  return (
    <Wrapper>
      {props.recipes.recipes.length ? (
        <List>
          {props.recipes.recipes.map((currentRecipe) => {
            return (
              <Item key={currentRecipe.id}>
                <ItemTitle>{currentRecipe.title}</ItemTitle>
                <ItemDate>
                  Created at: {formatedDate(currentRecipe.date_creation)}
                </ItemDate>
                <ItemContent>{currentRecipe.text}</ItemContent>
                <ButtonContainer>
                  <Button type="button">More</Button>
                </ButtonContainer>
              </Item>
            );
          })}
        </List>
      ) : props.recipes.status === 'request' ||
        props.recipes.status === null ? (
        <Get>Loading</Get>
      ) : (
        <NullRecipes>No recipes</NullRecipes>
      )}
    </Wrapper>
  );
};

RecipesList.propTypes = {
  recipes: PropTypes.object.isRequired
};

export default RecipesList;

const Wrapper = styled.header`
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

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Item = styled.li`
  margin: 15px 0;
  padding: 10px 0;

  @media (min-width: 768px) {
    width: 340px;
    margin-right: 40px;

    :nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: 992px) {
    width: 290px;
    margin-right: 45px;

    :nth-child(2n) {
      margin-right: 45px;
    }

    :nth-child(3n) {
      margin-right: 0;
    }
  }
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

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Get = styled.p`
  margin: 0;
  margin-top: 50px;
  padding: 0;
  padding-top: 10px;
  font-size: 24px;
  line-height: 34px;
  font-weight: 300;
  text-align: center;
`;

const NullRecipes = styled.h3`
  margin: 0;
  margin-top: 50px;
  padding: 0;
  padding-top: 10px;
  font-size: 24px;
  line-height: 34px;
  font-weight: 300;
  text-align: center;
`;
