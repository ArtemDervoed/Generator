export const addSong = (newSong) => {
  return {
    type: "ADD_SONG",
    payload: newSong,
  };
};

export const invalidatePlayList = (songs) => {
  return {
    type: "INVALIDATE_PLAYLIST",
    payload: songs,
  };
};


export const requestSongs = (songs) => {
  return {
    type: "REQUEST_SONGS",
    payload: songs,
  };
};
