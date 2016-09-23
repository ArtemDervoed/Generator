/* eslint-disable no-unused-vars */
import {combineReducers} from 'redux';
import * as API from '../API';
const initialState = API.getAllStorage();

const playlistManagement = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG': {
      state.push(action.payload);
      API.addData(action.payload.key, action.payload);
    } break;
    case 'FILTER': {
      state = action.payload;
    } break;
    case 'REMOVE_SONG': {
      // переделать
      for (let i = 0; i < state.length; i++) {
        if (state[i].key === action.payload) {
          state.splice(i, 1);
        }
      }
      API.removeData(action.payload);
    } break;
    default: return state;
  }
  return [...state];
};

const initState = (state = initialState, action) => {
  let newState = [];
  switch (action.type) {
    case 'GET_INITIAL_STATE': {
      newState = [...state];
    } break;
    default: return state;
  }
  return newState;
};

const searchProps = (state = 0, action) => {
  if (action.type === 'FILTER_PROPERTY') {
    return action.payload;
  }
  return state;
};

const changeProperty = (state = '', action) => {
  // переделать
  let newValue = state;
  switch (action.type) {
    case 'CHANGE_SONG': {
      newValue = action.payload;
      API.setSong(action.songId, action.payload);
    } break;
    case 'CHANGE_PLAYER': {
      newValue = action.payload;
      API.setPlayer(action.songId, action.payload);
    } break;
    case 'CHANGE_DATE': {
      newValue = action.payload;
      API.setReliseDate(action.songId, action.payload);
    } break;
    case 'CHANGE_ALBUM': {
      newValue = action.payload;
      API.setAlbum(action.songId, action.payload);
    } break;
    default: return state;
  }
  return newValue;
};
export const mainReducer = combineReducers({
  manager: playlistManagement,
  initState,
  searchProps,
  changeProperty,
});
