import { all } from 'redux-saga/effects';
import { rootClickSaga } from '../saga';
import { rootCounter } from '../saga/countSaga';
import { rootTodosSaga } from '../saga/todosSaga';

export function* rootWatcher() {
  yield all([rootClickSaga(), rootCounter(), rootTodosSaga()]);
}
