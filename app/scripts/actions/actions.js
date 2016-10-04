export const addSong = newSong => {
  return {
    type: 'ADD_SONG',
    payload: newSong,
  };
};
export const getInitialState = list => {
  return {
    type: 'GET_INITIAL_STATE',
    payload: list,
  };
};
export const filter = list => {
  return {
    type: 'FILTER',
    payload: list,
  };
};
export const changeFilterProperty = type => {
  return {
    type: 'FILTER_PROPERTY',
    payload: type,
  };
};
export const removeSong = id => {
  return {
    type: 'REMOVE_SONG',
    payload: id,
  };
};
