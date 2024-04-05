import {
  CounterActions,
  ICounter,
  TypeCounterActions,
} from '../../types/counter-types';

const initialState: ICounter = { count: 0 };

export const counterReducer = (
  state = initialState,
  { type, payload }: TypeCounterActions
) => {
  switch (type) {
    case CounterActions.INCREMENT:
      return {
        ...state,
        count: state.count + payload,
      };
    case CounterActions.DECREMENT:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
};
