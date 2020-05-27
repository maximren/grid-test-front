import { all } from 'redux-saga/effects';

import { usersSaga } from './saga/user.saga';

export default function* rootSaga() {
  yield all([
    usersSaga()
  ])
  // code after all-effect
}
