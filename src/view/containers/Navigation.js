import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOut } from '../../store/auth/actions';

import { PATH } from '../../constants/routes';

const Navigation = (props) => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [userLoggedNav, setUserLoggedNav] = useState(
    !!localStorage.getItem('token')
  );

  const changeNavigationState = () => {
    setNavigationOpen(!navigationOpen);
  };

  const handleSignOut = () => {
    props.signOut();
    setUserLoggedNav(false);
  };

  return (
    <FlexContainer>
      <Container>
        <Logo>
          <Bold>C</Bold>ook<Bold>B</Bold>ook
        </Logo>
        <Desctop>
          <DesctopList open={navigationOpen}>
            <DesctopItem to={PATH.HOME}>Home</DesctopItem>
            {userLoggedNav ? (
              <React.Fragment>
                <DesctopItem to={PATH.PROFILE}>Profile</DesctopItem>
                <DesctopItem to={PATH.HOME} onClick={handleSignOut}>
                  Sign Out
                </DesctopItem>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <DesctopItem to={PATH.SIGN_IN}>Sign In</DesctopItem>
                <DesctopItem to={PATH.SIGN_UP}>Sign Up</DesctopItem>
              </React.Fragment>
            )}
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
            <Item to={PATH.HOME}>Home</Item>
            {userLoggedNav ? (
              <React.Fragment>
                <Item to={PATH.PROFILE}>Profile</Item>
                <Item to={PATH.HOME} onClick={handleSignOut}>
                  Sign Out
                </Item>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Item to={PATH.SIGN_IN}>Sign In</Item>
                <Item to={PATH.SIGN_UP}>Sign Up</Item>
              </React.Fragment>
            )}
          </List>
        </Mobile>
      </Container>
    </FlexContainer>
  );
};

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ signOut }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(Navigation);

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

const Bold = styled.span`
  font-weight: 400;
  color: #fff;
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
  z-index: 100;
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

const Item = styled(Link)`
  display: block;
  padding: 25px 25px;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
  cursor: pointer;
`;
