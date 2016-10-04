/* eslint-disable no-unused-vars */
import {combineReducers} from 'redux';
import * as API from '../API';
const initialState = API.getAllStorage();

export const playlistManagement = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG': {
      const newState = state;
      newState.push(action.payload);
      return [...newState];
    }
    case 'FILTER': {
      let newState = state;
      newState = action.payload;
      return [...newState];
    }
    case 'CHANGE_SONG': {
      const newState = state;
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].key === action.songId) {
          newState[i].song = action.payload;
          return [...newState];
        }
      }
    } break;
    case 'CHANGE_PLAYER': {
      const newState = state;
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].key === action.songId) {
          newState[i].player = action.payload;
          return [...newState];
        }
      }
    } break;
    case 'CHANGE_ALBUM': {
      const newState = state;
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].key === action.songId) {
          newState[i].album = action.payload;
          return [...newState];
        }
      }
    } break;
    case 'CHANGE_DATE': {
      const newState = state;
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].key === action.songId) {
          newState[i].reliseDate = action.payload;
          return [...newState];
        }
      }
    } break;
    case 'REMOVE_SONG': {
      const newState = state;
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].key === action.payload) {
          newState.splice(i, 1);
          return [...newState];
        }
      }
    } break;
    default: return state;
  }
  return [...state];
};

export const mainReducer = combineReducers({
  manager: playlistManagement,
});
