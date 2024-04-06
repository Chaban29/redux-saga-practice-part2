import { FC, Fragment } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchPopularTodosFromServer, fetchUsersFromServer } from '../../api';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import {
  setPopularTodoAction,
  setTodoAction,
} from '../../redux/actionCreators/todosCreators';

export const Users: FC = () => {
  const dispatch = useAppDispatch();
  const users = useTypedSelector((state) => state.users);

  const handleSetPopularTodosFromServer = async () => {
    try {
      const popularTodos = await fetchPopularTodosFromServer();
      dispatch(setPopularTodoAction(popularTodos));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleGetUsersFromServer = async () => {
    try {
      const todos = await fetchUsersFromServer();
      dispatch(setTodoAction(todos));
      handleSetPopularTodosFromServer();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};
