import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Input from './Controllers/Input';
import Button from './Controllers/Button';
import TextArea from './Controllers/TextArea';
import RecipesList from './RecipesList';

const NewRecipeForm = (props) => {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    text: ''
  });

  const overlayRef = useRef(null);

  const [showNewRecipeError, setShowNewRecipeError] = useState(false);
  const [showCreatingRecipeForm, setShowCreatingRecipeForm] = useState(false);

  useEffect(() => {
    setShowCreatingRecipeForm(props.showForm);
  }, [props.showForm]);

  const handleCloseForm = (event) => {
    event.stopPropagation();
    if (event.target === overlayRef.current) {
      setShowCreatingRecipeForm(false);
      props.closeForm();
    }
  };

  const handleButtonCloseForm = (event) => {
    setShowCreatingRecipeForm(false);
    props.closeForm();
  };

  const handleInputChangeNewRecipe = (event) => {
    setNewRecipe({ ...newRecipe, [event.target.name]: event.target.value });
  };

  const validateNewRecipe = () => {
    if (newRecipe.title.length < 5 || newRecipe.title.length > 100) {
      setShowNewRecipeError(true);
      return false;
    } else if (newRecipe.text.length < 5 || newRecipe.text.length > 3000) {
      setShowNewRecipeError(true);
      return false;
    } else {
      setShowNewRecipeError(false);
      return true;
    }
  };

  const handleNewRecipe = (event) => {
    event.preventDefault();
    if (validateNewRecipe()) {
      props.createRecipe(localStorage.getItem('token'), { ...newRecipe });
      setNewRecipe({ title: '', text: '' });
      setShowCreatingRecipeForm(false);
      props.closeForm();
      props.setAddedNewRecip(true);
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
        <Form method="POST" onSubmit={handleNewRecipe}>
          <Input
            inputType="formInput"
            type="text"
            value={newRecipe.title}
            name="title"
            onChange={handleInputChangeNewRecipe}
            placeholder="Title"
            border
            minlength="5"
            maxlength="100"
          />
          <TextArea
            rows="5"
            type="textarea"
            value={newRecipe.text}
            name="text"
            onChange={handleInputChangeNewRecipe}
            placeholder="Text"
            border
            minlength="5"
            maxlength="3000"
          />
          <ErrorText show={showNewRecipeError}>Bad value</ErrorText>
          <SubmitButton type="submit">Add new recipe</SubmitButton>
          <CloseButton type="button" onClick={handleButtonCloseForm}>
            Close
          </CloseButton>
        </Form>
      </Container>
    </Background>
  );
};

NewRecipeForm.propTypes = {
  showForm: PropTypes.bool.isRequired,
  closeForm: PropTypes.func.isRequired,
  createRecipe: PropTypes.func.isRequired,
  setAddedNewRecip: PropTypes.func.isRequired
};

export default NewRecipeForm;

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
