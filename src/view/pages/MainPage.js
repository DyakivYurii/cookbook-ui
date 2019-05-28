import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllRecipes } from '../../store/recipes/actions';

import Header from '../components/MainPage/Header';
import RecipesList from '../components/RecipesList';
import Footer from '../components/Footer';

const MainPage = (props) => {
  console.log(`My props`, props);
  return (
    <React.Fragment>
      <Header recipes={props.recipes} getAllRecipes={props.getAllRecipes} />
      <RecipesList recipes={props.recipes} getRecipes={props.getAllRecipes} />
      <Footer />
    </React.Fragment>
  );
};

MainPage.propTypes = {
  history: PropTypes.object.isRequired,
  recipes: PropTypes.object.isRequired,
  getAllRecipes: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getAllRecipes }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
