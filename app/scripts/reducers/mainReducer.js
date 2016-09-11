import {combineReducers} from 'redux';
import Storage from '../storage';
let storage = new Storage();


const addNewSong = (
  state = storage.getAllStorage(), action) => {
    if (action.type === "ADD_SONG") {
      state.push(action.payload);
      storage.addData(Math.random(),action.payload);
    }
    return state;
};

const invalidate = ( state = storage.getAllStorage(), action) => {
    if (action.type === "INVALIDATE_PLAYLIST") {
      return state;
    }
    return state;
};


export const mainReducer = combineReducers({
  input: addNewSong,
});
