import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import saga from './sagas';

import rootReducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;