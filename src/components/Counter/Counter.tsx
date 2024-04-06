import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  sagaDecrementAction,
  sagaIncrementAction,
} from '../../redux/actionCreators/counterCreator';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counter = useTypedSelector((state) => state.counter.count || 0);

  const handleIncrement = () => {
    dispatch(sagaIncrementAction());
  };

  const handleDecrement = () => {
    if (!counter) return;
    dispatch(sagaDecrementAction());
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
