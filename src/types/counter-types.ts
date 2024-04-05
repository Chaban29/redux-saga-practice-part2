export interface ICounter {
  count: number;
}

export const enum CounterActions {
  INCREMENT = 'counter/increment',
  DECREMENT = 'counter/decrement',
}

export type TypeCounterActions =
  | { type: CounterActions.INCREMENT; payload: number }
  | { type: CounterActions.DECREMENT; payload: number };
