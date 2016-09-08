import {createStore} from 'redux';
import {mainReducer} from './../reducers/mainReducer';

export const store = createStore(mainReducer);

store.subscribe(() => {
  console.log("changed", store.getState());
});
