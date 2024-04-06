import { takeEvery, call } from 'redux-saga/effects';
import { fetchUsersFromServer } from '../../api';
import { getUsersAction } from '../reducers/usersReducer';

export function* sagaWorker() {
  yield call(fetchUsersFromServer);
}

export function* watchClickSaga() {
  yield takeEvery(getUsersAction, sagaWorker);
}

export function* rootClickSaga() {
  yield watchClickSaga();
}
