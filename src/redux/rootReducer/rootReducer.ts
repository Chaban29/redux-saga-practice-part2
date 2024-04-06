import { combineReducers } from 'redux';
import { counterReducer } from '../reducers/counterReducer';
import { usersReducer } from '../reducers/usersReducer';
import { store } from '../store/store';
import { todoReducer } from '../reducers/todosReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
