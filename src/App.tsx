import { FC } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import {
  decrementCounterAction,
  incrementCounterAction,
} from './redux/actionCreators/counterCreator';
import { fetchUsersFromServer } from './api';
import { getUsersAction } from './redux/reducers/usersReducer';

export const App: FC = () => {
  const dispatch = useDispatch();
  const counter = useTypedSelector((state) => state.counter.count);
  const users = useTypedSelector((state) => state.users);

  const handleIncrement = () => {
    dispatch(incrementCounterAction(20));
  };

  const handleDecrement = () => {
    if (!counter) return;
    dispatch(decrementCounterAction(10));
  };

  const handleGetUsersFromServer = async () => {
    try {
      const users = await fetchUsersFromServer();
      dispatch(getUsersAction(users));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
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
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} <br /> Email: {user.email}
            </li>
          ))}
        </ul>
      </div>
      <button
        disabled={users.length === 10 ? true : false}
        onClick={handleGetUsersFromServer}
      >
        Get users
      </button>
    </div>
  );
};
