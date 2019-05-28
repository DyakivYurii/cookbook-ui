import { fork } from 'redux-saga/effects';

import recipesSaga from './recipes/saga';
import authSaga from './auth/saga';

export default function* rootSaga() {
  yield [fork(recipesSaga), fork(authSaga)];
}
