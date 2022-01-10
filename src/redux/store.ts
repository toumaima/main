import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './rootReducer';
import rootSaga from './sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];
export type RootState = ReturnType<typeof store.getState>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;