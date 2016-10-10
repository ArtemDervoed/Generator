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
// REVIEW: неочевидный экшн, по взгляду на него и в редьюсер создаётся впечатление,
// что он просто изменяет playlist на list, а с фильтром это никак не связано
export const playlist = list => {
  return {
    type: 'PLAYLIST',
    payload: list,
  };
};
// REVIEW: советую использовать стандартный подход к именованию
// функций гетеров/сетеров - с префиксами get/set соответственно
export const setFilterProperty = type => {
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
