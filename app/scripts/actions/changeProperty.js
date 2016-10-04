export const changePropertySong = (id, newSongName) => {
  return {
    type: 'CHANGE_SONG',
    payload: newSongName,
    songId: id,
  };
};

export const changePropertyPlayer = (id, NewPlayerName) => {
  return {
    type: 'CHANGE_PLAYER',
    payload: NewPlayerName,
    songId: id,
  };
};

export const changePropertyAlbum = (id, NewAlbumName) => {
  return {
    type: 'CHANGE_ALBUM',
    payload: NewAlbumName,
    songId: id,
  };
};

export const changePropertyDate = (id, NewDate) => {
  return {
    type: 'CHANGE_DATE',
    payload: NewDate,
    songId: id,
  };
};
