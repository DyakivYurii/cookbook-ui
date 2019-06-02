import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../store/auth/reducer';

import { Router as MockRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render } from '@testing-library/react';

/**
 * Function for creating and connecting redux store and router
 *
 * @param {JSX} Component - rendered component, that we are testing
 * @param {Object} props - list of props that we want to pass to the component
 * @param {Object} history - history in a brouser
 * @param {String} history.route - initial route/route of current page
 * @param {Object} history.history - created history object
 * @param {Object} reducer - reducer
 * @param {Object} reducer.reducer - reducer of this component
 * @param {Object} reducer.initialState - initial state for component, can change it
 * @param {Object} reducer.store - created store for component using reducer and initialState
 */
export const renderWithReduxAndRouter = (
  Component,
  props,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {},
  {
    reducer = rootReducer,
    initialState,
    store = createStore(reducer, initialState)
  } = {}
) => {
  return {
    ...render(<Provider store={store} />),
    history
  };
};
