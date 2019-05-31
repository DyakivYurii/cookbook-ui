import { createStore, applyMiddleware } from 'redux';
import createSagaMiddelware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddelware = createSagaMiddelware();

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(sagaMiddelware)
);

sagaMiddelware.run(rootSaga);

export default store;
