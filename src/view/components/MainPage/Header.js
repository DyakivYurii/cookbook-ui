import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
import Input from '../Controllers/Input';

const Header = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    console.log(`search value =`, searchValue);
  }, [searchValue]);

  return (
    <Wrapper>
      <FlexContainer>
        <Logo>CookBook</Logo>
        <Navigation />
      </FlexContainer>
      <Searcher>
        <Title>Type something for searching</Title>
        <Description>You can find here different cool recipes</Description>
        <Input
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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0 24px;
    width: 720px;
  }

  @media (min-width: 992px) {
    margin: 0 auto;
    padding: 0 15px;
    width: 960px;
  }
`;

const Logo = styled.h1`
  margin: 0;
  padding: 0;
  padding-top: 23px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
  color: #fafafa;
`;

const Searcher = styled.div`
  margin-top: 35%;
  margin-bottom: 20%;
  text-align: center;

  @media (min-width: 500px) {
    margin-top: 75px;
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
