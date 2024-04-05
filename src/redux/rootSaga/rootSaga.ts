import { all } from 'redux-saga/effects';
import { rootSaga } from '../saga';
import { rootCounter } from '../saga/countSaga';

export function* rootWatcher() {
  yield all([rootSaga(), rootCounter()]);
}
