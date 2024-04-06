import { ITodos, TodosActions } from '../../types/todos-types';

export const setTodoAction = (payload: ITodos) => ({
  type: TodosActions.SET,
  payload,
});
export const setPopularTodoAction = (payload: ITodos) => ({
  type: TodosActions.SETPOPULAR,
  payload,
});

export const getAllTodosAction = (payload: ITodos) => ({
  type: TodosActions.GETTODOS,
  payload,
});
