import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfoByToken, putUser } from '../../store/user/actions';
import { createRecipe, getAllMyRecipes } from '../../store/recipes/actions';

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
        putUser={props.putUser}
        getUserRecipes={props.getAllMyRecipes}
        createRecipe={props.createRecipe}
      />
      <Footer />
    </React.Fragment>
  );
};

Profile.propTypes = {
  recipes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getUserInfoByToken: PropTypes.func.isRequired,
  createRecipe: PropTypes.func.isRequired,
  getAllMyRecipes: PropTypes.func.isRequired,
  putUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getUserInfoByToken,
      getAllMyRecipes,
      createRecipe,
      putUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
