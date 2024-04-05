import { CounterActions } from '../../types/counter-types';

export const incrementCounterAction = (payload: number) => ({
  type: CounterActions.INCREMENT,
  payload,
});
export const decrementCounterAction = (payload: number) => ({
  type: CounterActions.DECREMENT,
  payload,
});

export const sagaIncrementAction = (payload: number) => ({
  type: CounterActions.SAGAINCREMENT,
  payload,
});
export const sagaDecrementAction = (payload: number) => ({
  type: CounterActions.SAGADECREMENT,
  payload,
});
