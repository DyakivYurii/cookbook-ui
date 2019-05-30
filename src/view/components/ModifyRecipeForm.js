import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from './Controllers/Input';
import Button from './Controllers/Button';
import TextArea from './Controllers/TextArea';

const ModifyRecipeForm = (props) => {
  const [recipe, setRecipe] = useState({
    title: '',
    text: ''
  });

  const overlayRef = useRef(null);

  const [showModifyRecipeError, setShowModifyRecipeError] = useState(false);
  const [showCreatingRecipeForm, setShowModifyRecipeForm] = useState(false);

  useEffect(() => {
    setShowModifyRecipeForm(props.showForm);
  }, [props.showForm]);

  useEffect(() => {
    setRecipe({
      title: props.recipes.title,
      text: props.recipes.text
    });
  }, []);

  const handleCloseForm = (event) => {
    event.stopPropagation();
    if (event.target === overlayRef.current) {
      setShowModifyRecipeForm(false);
      props.closeForm();
    }
  };

  const handleButtonCloseForm = (event) => {
    setShowModifyRecipeForm(false);
    props.closeForm();
  };

  const handleInputChangeModifyRecipe = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const validateModifyRecipe = () => {
    if (recipe.title.length < 5 || recipe.title.length > 100) {
      setShowModifyRecipeError(true);
      return false;
    } else if (recipe.text.length < 5 || recipe.text.length > 3000) {
      setShowModifyRecipeError(true);
      return false;
    } else {
      setShowModifyRecipeError(false);
      return true;
    }
  };

  const handleModifyRecipe = (event) => {
    event.preventDefault();
    if (validateModifyRecipe()) {
      props.updateRecipe(localStorage.getItem('token'), props.recipes.id, {
        ...recipe
      });
      setShowModifyRecipeForm(false);
      props.closeForm();
      props.setUpdateRecipeInfo(true);
    }
  };

  return (
    <Background
      ref={overlayRef}
      show={showCreatingRecipeForm}
      onClick={handleCloseForm}
    >
      <Container>
        <ModifyRecipeTitle>Write your recipe</ModifyRecipeTitle>
        <Form method="POST" onSubmit={handleModifyRecipe}>
          <Input
            inputType="formInput"
            type="text"
            value={recipe.title}
            name="title"
            onChange={handleInputChangeModifyRecipe}
            placeholder="Title"
            border
            minlength="5"
            maxlength="100"
          />
          <TextArea
            rows="5"
            type="textarea"
            value={recipe.text}
            name="text"
            onChange={handleInputChangeModifyRecipe}
            placeholder="Text"
            border
            minlength="5"
            maxlength="3000"
          />
          <ErrorText show={showModifyRecipeError}>Bad value</ErrorText>
          <SubmitButton type="submit">Save Changes</SubmitButton>
          <CloseButton type="button" onClick={handleButtonCloseForm}>
            Close
          </CloseButton>
        </Form>
      </Container>
    </Background>
  );
};

ModifyRecipeForm.propTypes = {
  recipes: PropTypes.object.isRequired,
  showForm: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired,
  updateRecipe: PropTypes.func.isRequired,
  setUpdateRecipeInfo: PropTypes.func.isRequired
};

export default ModifyRecipeForm;

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

const ModifyRecipeTitle = styled.h3`
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
