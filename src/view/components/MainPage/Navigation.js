import React, { useState } from 'react';
import styled from 'styled-components';

const Navigation = (props) => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const changeNavigationState = () => {
    setNavigationOpen(!navigationOpen);
    console.log(navigationOpen);
  };

  return (
    <Wrapper>
      <Mobile>
        <Title open={navigationOpen}>Menu</Title>
        <Burger
          type="button"
          onClick={changeNavigationState}
          open={navigationOpen}
        >
          <Icon open={navigationOpen} />
        </Burger>
        <List open={navigationOpen}>
          <Item>Home</Item>
          <Item>Sign In</Item>
          <Item>Sign Up</Item>
        </List>
      </Mobile>
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled.nav``;

const Mobile = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 #30303020;
`;

const Title = styled.h2`
  ${(props) => {
    return props.open
      ? `
          box-sizing: border-box;
          display: block;
          width: 100%;
          margin: 0;
          padding: 20px;
          padding-right: 20%
          font-weight: 300;
          border-bottom: 1px solid #f0f0f0;
          box-shadow: 0 1px 3px 0 #30303010;`
      : `display: none;`;
  }}
`;

const Burger = styled.button`
  position: absolute;
  right: 25px;
  ${(props) => {
    return props.open ? `top: 15px;` : `top: 20px;`;
  }};
  margin: 0;
  padding: 19px 0;
  width: 38px;
  height: 2px;
  border: none;
  outline: none;
  background-color: transparent;
`;

const Icon = styled.div`
  border: none;
  border-radius: 5px;
  outline: none;

  ${(props) => {
    return props.open
      ? `
          &::before,
          &::after {
            content: '';
            position: absolute;
            height: 2px;
            border-radius: 5px;
            background-color: #303030;
            left: 0;
            top: 20px;
          }

          &::before {
            width: 34px;
            transform: rotate(45deg);
          }

          &::after {
            width: 34px;
            transform: rotate(-45deg);
          }
        `
      : `
          height: 2px;
          background-color: #fff;
          outline: none;

          &::before,
          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            border-radius: 5px;
            background-color: #fff;
          }

          &::before {
            top: 7px;
            left: 0;
          }

          &::after {
            bottom: 5px;
            left: 0;
          }`;
  }}
`;

const List = styled.ul`
  ${(props) => {
    return props.open
      ? `
        margin: 0;
        margin-top: 0;
        padding: 0;
        list-style: none;`
      : `display: none`;
  }}
`;

const Item = styled.li`
  padding: 25px 25px;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
  cursor: pointer;
`;
