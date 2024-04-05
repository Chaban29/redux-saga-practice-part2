import { FC } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import {
  decrementCounterAction,
  incrementCounterAction,
} from './redux/reducers/counterReducer';

export const App: FC = () => {
  const dispatch = useDispatch();
  const counter = useTypedSelector((state) => state.counter.count);

  const handleIncrement = () => {
    dispatch(incrementCounterAction(1));
  };

  const handleDecrement = () => {
    if (!counter) return;
    dispatch(decrementCounterAction(1));
  };

  return (
    <div>
      <h2>{counter}</h2>
      <button type='button' onClick={handleIncrement}>
        increment
      </button>
      <button type='button' onClick={handleDecrement}>
        decrement
      </button>
    </div>
  );
};
