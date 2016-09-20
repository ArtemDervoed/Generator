import {applyMiddleware, createStore} from 'redux';
import {mainReducer} from './../reducers/mainReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const middleware = applyMiddleware(thunk, logger());
export const store = createStore(mainReducer, middleware);

store.subscribe(() => {
  console.log("changed", store.getState());
});
