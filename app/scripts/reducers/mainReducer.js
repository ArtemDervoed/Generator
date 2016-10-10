/* eslint-disable no-unused-vars */
import {combineReducers} from 'redux';
import * as API from '../API';
// REVIEW: давай перенесём данный метод в компонент PlayList,
// а также добавим экшн SET_PLAYLIST, чтобы можно было задать сразу весь
// список
const initialState = API.getAllStorage();

// REVIEW: по сути, данный редьюсер из себя как раз представляет playlist -
// предлагаю так его и назвать.
// REVIEW: я бы добавила редьюсер, представляющий элемент playlist - видимо, song.
// Он бы описывал структуру элемента и позволял бы управлять полями элемента -
// изменять их. Его не нужно объединять в редьюсеры, которые ты возвращаешь,
// его можно удобно использовать в рамках редьюсера playlist
// REVIEW: я бы добавила редьюсер, который хранит значения фильтра и фильтруемого
// поля и реагировала на его изменение перерисовкой playlist (на уровне представления)
export const playlistManagement = (state = initialState, action) => {
  switch (action.type) {
    // REVIEW: Этот метод упрощается до
    // return [...state, action.payload];
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
    // REVIEW: используй .forEach()
    // или ES6 - for (let value of arr)
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
