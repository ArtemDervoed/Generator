export const addSong = newSong => {
  return {
    type: "ADD_SONG",
    payload: newSong,
  };
};

export const filter = list => {
  return {
    type: "FILTER",
    payload: list,
  };
};
export const removeSong = id => {
  return {
    type: "REMOVE_SONG",
    payload: id,
  };
};

export const changePropertySong = newSongName => {
  return {
    type: "CHANGE_PROPERTY_SONG",
    payload: newSongName,
  };
};

export const changePropertyPlayer = NewPlayerName => {
  return {
    type: "CHANGE_PROPERTY_PLAYER",
    payload: NewPlayerName,
  };
};

export const changePropertyAlbum = NewAlbumName => {
  return {
    type: "CHANGE_PROPERTY_ALBUM",
    payload: NewAlbumName,
  };
};

export const changePropertyDate = NewDate => {
  return {
    type: "CHANGE_PROPERTY_DATE",
    payload: NewDate,
  };
};
