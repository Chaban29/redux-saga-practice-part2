import {
  ITodos,
  TodosActions,
  TypeTodosActions,
} from '../../types/todos-types';

const initialTodoState: ITodos = {
  todos: [],
  allTodos: [],
};

export const todoReducer = (
  state = initialTodoState,
  { type, payload }: TypeTodosActions
) => {
  switch (type) {
    case TodosActions.SET:
      return { ...state, todos: payload.todos };
    case TodosActions.SETPOPULAR:
      return { ...state, allTodos: payload.allTodos };
    default:
      return state;
  }
};
