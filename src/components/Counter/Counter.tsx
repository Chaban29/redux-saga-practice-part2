import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  incrementCounterAction,
  decrementCounterAction,
} from '../../redux/actionCreators/counterCreator';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counter = useTypedSelector((state) => state.counter.count);

  const handleIncrement = () => {
    dispatch(incrementCounterAction(20));
  };

  const handleDecrement = () => {
    if (!counter) return;
    dispatch(decrementCounterAction(10));
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
