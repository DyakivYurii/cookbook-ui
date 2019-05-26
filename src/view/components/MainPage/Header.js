import React, { useState } from 'react';
import styled from 'styled-components';

const Header = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <Wrapper>
      <Logo>CookBook</Logo>
      <Navigation />
      <Searcher>
        <Title>Type something for searching</Title>
        <Description>You can find here different cool recipes</Description>
        <SearcherInput
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
  min-height: 70vh;
  padding: 0 15px;
  background-color: #3fd4aa;
  border-bottom: 1px solid #3fd4aa;
`;

const Logo = styled.h1`
  margin: 0;
  padding: 0;
  padding-top: 15px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
  color: #fafafa;
`;

const Navigation = styled.div``;

const Searcher = styled.div`
  margin-top: 75px;
  margin-bottom: 35px;
  text-align: center;
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

const SearcherInput = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 15px 30px;
  font-size: 16px;
  line-height: 24px;
  color: #555;
  background-color: #fff;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 3px 0 #30303020;
  outline: none;
  transition: 200ms;

  &:hover {
    box-shadow: 0 3px 5px 0 #30303035;
    transition: 200ms;
  }

  &::placeholder {
    color: #cfcfcf;
  }
`;
