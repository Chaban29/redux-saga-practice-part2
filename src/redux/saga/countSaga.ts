import { put, takeEvery } from 'redux-saga/effects';
import { CounterActions } from '../../types/counter-types';
import {
  decrementCounterAction,
  incrementCounterAction,
} from '../actionCreators/counterCreator';

export const delay = (ms: number) =>
  new Promise<void>((res) => setTimeout(() => res(), ms * 1000));

export function* incrementWorker() {
  yield delay(1);
  yield put(incrementCounterAction(100));
}

export function* decrementWorker() {
  yield delay(1);
  yield put(decrementCounterAction(50));
}

export function* counterWatcher() {
  yield takeEvery(CounterActions.SAGAINCREMENT, incrementWorker);
  yield takeEvery(CounterActions.SAGADECREMENT, decrementWorker);
}

export function* rootCounter() {
  yield counterWatcher();
}
