import React from 'react';
import styled from 'styled-components';

const TextArea = (props) => {
  return <Component {...props} />;
};

export default TextArea;

const Component = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 15px;
  padding: 15px 30px;
  font-size: 16px;
  line-height: 24px;
  color: #555;
  background-color: #fff;
  transition: 200ms;
  border-radius: 3px;
  border: 1px solid #25252540;
  box-shadow: none;
  outline: none;
  resize: none;

  &:hover {
    box-shadow: 0 3px 5px 0 #30303035;
    transition: 200ms;
  }

  &::placeholder {
    color: #30303070;
  }
`;
