import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PATH } from '../../constants/routes';

const Navigation = (props) => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const changeNavigationState = () => {
    setNavigationOpen(!navigationOpen);
  };

  return (
    <FlexContainer>
      <Container>
        <Logo>CookBook</Logo>
        <Desctop>
          <DesctopList open={navigationOpen}>
            <DesctopItem to={PATH.HOME}>Home</DesctopItem>
            <DesctopItem to={PATH.SIGN_IN}>Sign In</DesctopItem>
            <DesctopItem to={PATH.SIGN_UP}>Sign Up</DesctopItem>
          </DesctopList>
        </Desctop>

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
      </Container>
    </FlexContainer>
  );
};

export default Navigation;

const FlexContainer = styled.div`
  background-color: #3fd4aa;
  padding: 20px 15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

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
  font-size: 20px;
  line-height: 28px;
  font-weight: 300;
  color: #fafafa;
`;

const Desctop = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const DesctopList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const DesctopItem = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 300;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: 250ms;
  border: none;

  &:hover {
    background-color: #f0f0f073;
    transition: 200ms;
  }
`;

const Mobile = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 #30303020;

  @media (min-width: 768px) {
    display: none;
  }
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

const Item = styled(List)`
  padding: 25px 25px;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
  cursor: pointer;
`;
