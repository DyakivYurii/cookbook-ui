import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return <Component {...props}>{props.children}</Component>;
};

export default Button;

const Component = styled.button`
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
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: #49bd9c;
    transition: 200ms;
    box-shadow: 0 3px 5px 0 #30303035;
  }
`;
