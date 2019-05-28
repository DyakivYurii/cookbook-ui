import { fork } from 'redux-saga/effects';

import recipesSaga from './recipes/saga';
import authSaga from './auth/saga';
import userSaga from './user/saga';

export default function* rootSaga() {
  yield [fork(recipesSaga), fork(authSaga), fork(userSaga)];
}
