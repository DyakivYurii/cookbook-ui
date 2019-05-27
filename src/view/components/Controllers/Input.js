import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  return <Component {...props} />;
};

export default Input;

const Component = styled.input`
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

  @media (min-width: 768px) {
    width: 500px;
    margin: 0 auto;
  }
`;
