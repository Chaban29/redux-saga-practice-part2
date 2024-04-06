import { put, takeEvery, call, all } from 'redux-saga/effects';
import { fetchPopularTodosFromServer, fetchTodosFromServer } from '../../api';
import {
  getAllTodosAction,
  setPopularTodoAction,
} from '../actionCreators/todosCreators';

function* todosWorker() {
  yield call(fetchTodosFromServer);
  yield call(fetchPopularTodosFromServer);
}

function* todosWatcher() {
  yield takeEvery(getAllTodosAction, todosWorker);
  yield takeEvery(setPopularTodoAction, todosWorker);
}

export function* rootTodosSaga() {
  yield todosWatcher();
}
