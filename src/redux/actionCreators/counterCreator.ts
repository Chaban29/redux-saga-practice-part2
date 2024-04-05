import { CounterActions } from '../../types/counter-types';

export const incrementCounterAction = (payload: number) => ({
  type: CounterActions.INCREMENT,
  payload,
});
export const decrementCounterAction = (payload: number) => ({
  type: CounterActions.DECREMENT,
  payload,
});

export const sagaIncrementAction = () => ({
  type: CounterActions.SAGAINCREMENT,
});
export const sagaDecrementAction = () => ({
  type: CounterActions.SAGADECREMENT,
});
