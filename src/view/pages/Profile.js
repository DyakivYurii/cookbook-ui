import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfoByToken } from '../../store/user/actions';
import { createRecipe } from '../../store/recipes/actions';

import Navigation from '../containers/Navigation';
import UserProfile from '../components/UserProfile';
import Footer from '../components/Footer';

const Profile = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <UserProfile
        recipes={props.recipes}
        user={props.user}
        getUserInfoByToken={props.getUserInfoByToken}
        createRecipe={props.createRecipe}
      />
      <Footer />
    </React.Fragment>
  );
};

Profile.propTypes = {
  // user: PropTypes.object.isRequired,
  recipes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getUserInfoByToken: PropTypes.func.isRequired,
  createRecipe: PropTypes.func.isRequired
  // getUserRecipes: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUserInfoByToken, createRecipe }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
