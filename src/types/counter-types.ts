export interface ICounter {
  count: number;
}

export const enum CounterActions {
  INCREMENT = 'counter/increment',
  DECREMENT = 'counter/decrement',
  SAGAINCREMENT = 'counter/sagaIncrement',
  SAGADECREMENT = 'counter/sagaDecrement',
}

export type TypeCounterActions =
  | { type: CounterActions.INCREMENT; payload: number }
  | { type: CounterActions.DECREMENT; payload: number }
  | { type: CounterActions.SAGAINCREMENT; payload?: number }
  | { type: CounterActions.SAGADECREMENT; payload?: number };
