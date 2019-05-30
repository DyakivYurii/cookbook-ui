import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getRecip,
  updateRecipe,
  deleteRecipe
} from '../../store/recipes/actions';

import Navigation from '../containers/Navigation';
import Footer from '../components/Footer';
import RecipeInfo from '../components/RecipeInfo';

const Recipe = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <RecipeInfo
        id={props.match.params.id}
        history={props.history}
        recipes={props.recipes}
        getRecip={props.getRecip}
        updateRecipe={props.updateRecipe}
        deleteRecipe={props.deleteRecipe}
      />
      <Footer />
    </React.Fragment>
  );
};

Recipe.propTypes = {
  history: PropTypes.object.isRequired,
  recipes: PropTypes.object.isRequired,
  getRecip: PropTypes.func.isRequired,
  updateRecipe: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getRecip, updateRecipe, deleteRecipe }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
