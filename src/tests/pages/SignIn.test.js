import React from 'react';
import 'jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import { render } from '@testing-library/react';

import SignIn from '../../view/pages/SignIn';
import rootReducer from '../../store/auth/reducer';

import { renderWithReduxAndRouter } from '../utils';

// const renderEditor = (props) => {
//   const utils = renderWithRedux(<SignUp {...props} />);
//   const submitButton = utils.queryByText('Sign Up');
//   return { ...utils, submitButton };
// };

// test('contain submit button', () => {
//   const { getByTestId } = renderWithReduxAndRouter(<SignIn />, null, {
//     route: '/sign_in'
//   });
//   // const { submitButton } = renderWithRedux();

//   const submitButtonNode = getByTestId('sing-in');
//   expect(submitButtonNode).toBeInTheDocument();
// });

// test('submit button has a "submit" type', () => {
//   const { submitButton } = renderEditor();

//   expect(submitButton).toHaveAttribute('type', 'submit');
// });

test('some test', async () => {
  const { getAllByText, getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <SignIn history={history} />
      </Router>
    </Provider>
  );

  // const { getByText } = renderWithRedux(
  //   <SignUp history={{ his: 'his' }} auth={{ status: '' }} />
  // );

  // const { getByText } = render(
  //   <Provider store={store}>
  //     <SignUp history={{ his: 'his' }} />
  //   </Provider>
  // );

  const submitButtonNode = getByTestId('sign-in');

  expect(submitButtonNode).toBeInTheDocument();
});
