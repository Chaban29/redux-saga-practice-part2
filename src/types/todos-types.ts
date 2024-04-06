export interface ITodos {
  todos: ITodo[];
  allTodos: ITodo[];
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type TypeTodo = Partial<ITodo>;

export const enum TodosActions {
  SET = 'todos/setTodos',
  SETPOPULAR = 'todos/setPopularTodos',
  GETTODOS = 'todos/getAllTodos',
}

export type TypeTodosActions =
  | { type: TodosActions.SET; payload: ITodos }
  | { type: TodosActions.SETPOPULAR; payload: ITodos }
  | { type: TodosActions.GETTODOS; payload: ITodos };
