import {combineReducers} from 'redux';

const toAdd = (
  state=[], action) => {
    if (action.type === "ADD_SONG") {
      state.push(action.payload);
    }
    return state;
};

export const mainReducer = combineReducers({
  input: toAdd,
});
