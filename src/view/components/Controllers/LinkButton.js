import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {
  return <Component {...props}>{props.children}</Component>;
};

export default LinkButton;

const Component = styled(Link)`
  width: 100%;
  margin-top: 10px;
  padding: 10px 10px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration: none;
  color: #fff;
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
