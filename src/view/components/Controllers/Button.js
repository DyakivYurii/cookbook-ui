import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = (props) => {
  return <Component {...props}>{props.children}</Component>;
};

Button.defaultProps = {
  buttonType: 'button'
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(['button', 'delete'])
};

export default Button;

const Component = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px 10px;
  font-size: 16px;
  line-height: 24px;
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

  ${(props) => {
    return props.buttonType === 'delete'
      ? `margin-top: 25px;
        background-color: #f74c4c

        &:hover {
          background-color: #f95c71;
          transition: 200ms;
          box-shadow: 0 3px 5px 0 #30303035;
        }
        
        @media (min-width: 768px) {
          margin: 0;
          margin-top: 10px;
        }
        `
      : null;
  }}
`;
