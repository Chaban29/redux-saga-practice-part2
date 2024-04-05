import { takeEvery } from 'redux-saga/effects';
import { fetchUsersFromServer } from '../../api';
import { getUsersAction } from '../reducers/usersReducer';

export function* sagaWorker() {
  yield fetchUsersFromServer();
}

export function* watchClickSaga() {
  yield takeEvery(getUsersAction, sagaWorker);
}

export function* rootSaga() {
  yield watchClickSaga();
}
