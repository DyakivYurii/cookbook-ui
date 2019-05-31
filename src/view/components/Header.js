import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navigation from '../containers/Navigation';
import Input from './Controllers/Input';

const Header = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    props.searchRecipesByTitle(searchValue);
  }, [searchValue]);

  return (
    <Wrapper>
      <Navigation />
      <Searcher>
        <Title>Type something for searching</Title>
        <Description>You can find here different cool recipes</Description>
        <Input
          inputType="searchInput"
          type="text"
          value={searchValue}
          name="search"
          placeholder="Search recipe"
          onChange={handleInputChange}
        />
      </Searcher>
    </Wrapper>
  );
};

Header.propTypes = {
  recipes: PropTypes.object.isRequired,
  getAllRecipes: PropTypes.func.isRequired,
  searchRecipesByTitle: PropTypes.func.isRequired
};

export default Header;

const Wrapper = styled.header`
  position: relative;
  max-height: 70vh;
  padding: 0 15px;
  background-color: #3fd4aa;
  border-bottom: 1px solid #3fd4aa;

  @media (min-width: 768px) {
    padding: 0 24px;
  }

  @media (min-width: 992px) {
    padding: 0 15px;
  }
`;

const Searcher = styled.div`
  margin-top: 55px;
  margin-bottom: 20%;
  text-align: center;

  @media (min-width: 500px) {
    margin-top: 55px;
    margin-bottom: 45px;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    margin-top: 75px;
    margin-bottom: 55px;
    width: 720px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
  font-size: 32px;
  line-height: 40px;
  font-weight: 300;
  color: #fafafa;
`;

const Description = styled.p`
  margin: 0;
  margin-bottom: 50px;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #fafafa;
`;
