import {combineReducers} from 'redux';
import Storage from '../storage';

let storage = new Storage();


const addNewSong = (
  state = storage.getAllStorage(), action) => {
    if (action.type === "ADD_SONG") {
      state.push(action.payload);
      storage.addData(action.payload.key, action.payload);
    }
    return [...state];
};

const filterSong = (
  state = storage.getAllStorage(), action) => {
    if (action.type === "FILTER") {
      state = action.payload;
    }
    return [...state];
};

const removeSong = (
  state = storage.getAllStorage(), action) => {
    if (action.type === "REMOVE_SONG") {
      storage.removeData(action.payload);
      state.splice(action.payload, action.payload);
    }
    return [...state];
};

export const mainReducer = combineReducers({
  input: addNewSong,
  filter: filterSong,
  remove: removeSong,
});
