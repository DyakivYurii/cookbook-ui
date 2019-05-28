import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserInfoByToken } from '../../store/user/actions';

import { PATH } from '../../constants/routes';

const Profile = (props) => {
  return <h3>This is profile</h3>;
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  getAllRecipes: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUserInfoByToken }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
