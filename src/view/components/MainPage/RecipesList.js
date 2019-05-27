import React from 'react';
import styled from 'styled-components';

const fakeRecipe = {
  id: 1,
  title: 'This is my new cool recipe with changed',
  text:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  date_creation: '2019-05-25T18:10:00.075Z',
  author_id: 1
};

const RecipesList = (props) => {
  return (
    <Wrapper>
      <List>
        <Item key={fakeRecipe.id}>
          <ItemTitle>{fakeRecipe.title}</ItemTitle>
          <ItemDate>Created at: {fakeRecipe.date_creation}</ItemDate>
          <ItemContent>{fakeRecipe.text}</ItemContent>
          <ButtonContainer>
            <MoreInfo type="button">More</MoreInfo>
          </ButtonContainer>
        </Item>
        <Item key={fakeRecipe.id}>
          <ItemTitle>{fakeRecipe.title}</ItemTitle>
          <ItemDate>Created at: {fakeRecipe.date_creation}</ItemDate>
          <ItemContent>{fakeRecipe.text}</ItemContent>
          <ButtonContainer>
            <MoreInfo type="button">More</MoreInfo>
          </ButtonContainer>
        </Item>
        <Item key={fakeRecipe.id}>
          <ItemTitle>{fakeRecipe.title}</ItemTitle>
          <ItemDate>Created at: {fakeRecipe.date_creation}</ItemDate>
          <ItemContent>{fakeRecipe.text}</ItemContent>
          <ButtonContainer>
            <MoreInfo type="button">More</MoreInfo>
          </ButtonContainer>
        </Item>
      </List>
    </Wrapper>
  );
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
    justify-content: space-between;
  }
`;

const Item = styled.li`
  margin: 15px 0;
  padding: 10px 0;

  @media (min-width: 768px) {
    width: 340px;
  }

  @media (min-width: 992px) {
    width: 300px;
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

const MoreInfo = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px 10px;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  background-color: #3fd4aa;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 3px 0 #30303050;
`;
