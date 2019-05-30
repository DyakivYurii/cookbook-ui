import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from './Controllers/Input';
import Button from './Controllers/Button';

const ChangeProfile = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  const overlayRef = useRef(null);

  const [showPutUserError, setPutUserError] = useState(false);
  const [showCreatingRecipeForm, setShowChangeProfileForm] = useState(false);

  useEffect(() => {
    setUser({ name: props.user.name, email: props.user.email });
    setShowChangeProfileForm(props.showForm);
  }, [props.showForm]);

  const handleCloseForm = (event) => {
    event.stopPropagation();
    if (event.target === overlayRef.current) {
      setShowChangeProfileForm(false);
      props.closeForm();
    }
  };

  const handleButtonCloseForm = (event) => {
    setShowChangeProfileForm(false);
    props.closeForm();
  };

  const handlePutUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const validateUser = () => {
    if (user.name.length < 3 || user.name.length > 30) {
      setPutUserError(true);
      return false;
    } else if (user.email.length < 3 || user.email.length > 40) {
      setPutUserError(true);
      return false;
    } else {
      setPutUserError(false);
      return true;
    }
  };

  const handlePutUserSubmit = (event) => {
    event.preventDefault();
    if (validateUser()) {
      props.updateUser(localStorage.getItem('token'), { ...user });
      setShowChangeProfileForm(false);
      props.closeForm();
      props.setChangedUserInfo(true);
    }
  };

  return (
    <Background
      ref={overlayRef}
      show={showCreatingRecipeForm}
      onClick={handleCloseForm}
    >
      <Container>
        <NewRecipeTitle>Write your recipe</NewRecipeTitle>
        <Form method="POST" onSubmit={handlePutUserSubmit}>
          <Input
            inputType="formInput"
            type="text"
            value={user.name}
            name="name"
            onChange={handlePutUser}
            placeholder="Name"
            border
            minlength="3"
            maxlength="30"
          />
          <Input
            inputType="formInput"
            type="text"
            value={user.email}
            name="email"
            onChange={handlePutUser}
            placeholder="E-mail"
            border
            minlength="3"
            maxlength="40"
          />
          <ErrorText show={showPutUserError}>Bad value</ErrorText>
          <SubmitButton type="submit">Save changes</SubmitButton>
          <CloseButton type="button" onClick={handleButtonCloseForm}>
            Close
          </CloseButton>
        </Form>
      </Container>
    </Background>
  );
};

ChangeProfile.propTypes = {
  user: PropTypes.object.isRequired,
  showForm: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  setChangedUserInfo: PropTypes.func.isRequired
};

export default ChangeProfile;

const Background = styled.div`
  background-color: #00000085;
  position: fixed;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${(props) => {
    return props.show ? `display: block;` : `display: none;`;
  }}
  overflow-y: hidden;
`;

const Container = styled.section`
  box-sizing: border-box;
  width: 430px;
  padding: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 5px 0 #30303035;
  background-color: #fff;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 700px;
  }
`;

const NewRecipeTitle = styled.h3`
  margin: 0;
  margin-bottom: 35px;
  padding: 0;
  font-size: 32px;
  line-height: 40px;
  font-weight: 300;
  text-align: center;
  color: #151515;
`;

const Form = styled.form`
  background-color: #fff;
`;

const ErrorText = styled.p`
  margin: 0;
  padding: 0;
  padding-left: 30px;
  padding-top: 15px;
  color: #e05555;

  ${(props) => {
    return props.show ? `display: block;` : `display: none;`;
  }}
`;

const SubmitButton = styled(Button)`
  margin-top: 35px;
`;

const CloseButton = styled(Button)`
  margin-top: 25px;
  color: #fff;
  background: #33f19e;
`;
