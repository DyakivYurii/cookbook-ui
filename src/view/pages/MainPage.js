import React from 'react';
import styled from 'styled-components';

import Header from '../components/MainPage/Header';
import RecipesList from '../components/MainPage/RecipesList';
import Footer from '../components/MainPage/Footer';

const MainPage = () => {
  return (
    <React.Fragment>
      <Header />
      <RecipesList />
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
