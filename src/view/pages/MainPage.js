import React from 'react';

import Header from '../components/MainPage/Header';
import RecipesList from '../components/MainPage/RecipesList';
import Footer from '../components/Footer';

const MainPage = () => {
  // console.log(`This is api url`, process.env.REACT_APP_API_URL);
  return (
    <React.Fragment>
      <Header />
      <RecipesList />
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
