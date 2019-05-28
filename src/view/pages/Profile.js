import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Navigation from '../components/Navigation';
import UserProfile from '../components/Profile/UserProfile';
import Footer from '../components/Footer';

const Profile = (props) => {
  console.log(`Thsi is rposp`, props);
  return (
    <React.Fragment>
      <Navigation />
      <UserProfile recipes={props.recipes} />
      <Footer />
    </React.Fragment>
  );
};

Profile.propTypes = {
  // user: PropTypes.object.isRequired,
  recipes: PropTypes.object.isRequired
  // getUserRecipes: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
