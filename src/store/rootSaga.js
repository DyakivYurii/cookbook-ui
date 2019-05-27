import { fork } from 'redux-saga/effects';

import recipesSaga from './recipes/saga';

export default function* rootSaga() {
  yield [fork(recipesSaga)];
}
