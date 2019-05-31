import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <Text>Created by Dyakiv Yurii</Text>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  margin-top: auto;
  padding: 20px 15px;
  background-color: #3fd4aa;
`;

const Text = styled.small`
  display: block;
  text-align: center;
  color: #fff;
`;
