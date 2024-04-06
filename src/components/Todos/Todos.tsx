import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ITodo } from '../../types/todos-types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setTodoAction } from '../../redux/actionCreators/todosCreators';
import { fetchTodosFromServer } from '../../api';

export const Todos: FC = () => {
  const todos = useTypedSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();
  console.log(todos);

  const handleGetUsersFromServer = async () => {
    try {
      const todos = await fetchTodosFromServer();
      dispatch(setTodoAction(todos));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  if (!todos) return <h1>Loading...</h1>;

  return (
    <div>
      <ul>
        {todos.map((todo: ITodo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button onClick={handleGetUsersFromServer}>Set todos</button>
    </div>
  );
};
