import Storage from '../storage';
let storage;

export const addSong = (newSong) => {
  storage = new Storage();
  storage.addData(Math.random(),newSong);
  return {
    type: "ADD_SONG",
    payload: newSong,
  };
};
