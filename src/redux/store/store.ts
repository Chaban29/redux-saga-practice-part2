import { Reducer, createStore } from 'redux';
import { rootReducer } from '../rootReducer/rootReducer';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootWatcher } from '../rootSaga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer as Reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);
