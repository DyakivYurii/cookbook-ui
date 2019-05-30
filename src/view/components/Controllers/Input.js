import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = (props) => {
  return <Component {...props} />;
};

Input.propTypes = {
  inputType: PropTypes.oneOf(['searchInput', 'formInput']).isRequired
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
  border-radius: 3px;
  box-shadow: 0 1px 3px 0 #30303020;
  transition: 200ms;
  border: none;
  outline: none;

  &:hover {
    box-shadow: 0 3px 5px 0 #30303035;
    transition: 200ms;
  }

  ${(props) => {
    if (props.inputType === 'formInput') {
      return `
        width: 100%;
        margin: 0 auto;
        margin-bottom: 15px;
        box-shadow: none;
        border: 1px solid #25252540;

        &::placeholder {
          color: #30303070;
        }

        width: 100%;
        margin: 0 auto;
        margin-top: 20px;`;
    }
    if (props.inputType === 'searchInput') {
      return `
        &::placeholder {
          color: #cfcfcf;
        }

        @media (min-width: 768px) {
          width: 500px;
          margin: 0 auto;
        }`;
    }
  }}
`;
