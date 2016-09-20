import {combineReducers} from 'redux';
import * as API from '../API';

const playlistManagement = (state = API.getAllStorage(), action) => {
  if (action.type === "ADD_SONG") {
    state.push(action.payload);
    API.addData(action.payload.key, action.payload);
  }
  if (action.type === "FILTER") {
    state = action.payload;
  }
  if (action.type === "EDIT_SONG") {
    state = action.payload;
  }
  if (action.type === "REMOVE_SONG") {
    for (let i = 0; i < state.length; i++) {
      if (state[i].key === action.payload) {
        state.splice(i, 1);
      }
    }
    API.removeData(action.payload);
  }
  return [...state];
};

export const mainReducer = combineReducers({
  manager: playlistManagement,
});
