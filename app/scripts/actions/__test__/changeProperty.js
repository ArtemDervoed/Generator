import * as actionTypes from '../actionTypes';
import * as actions from '../changeProperty';

describe('actions with song props', () => {
  it('edit song', () => {
    expect(actions.changePropertySong(0, 'newSongName')).to.be.eql({
      type: actionTypes.CHANGE_SONG,
      payload: 'newSongName',
      songId: 0,
    });
  });
  it('edit player', () => {
    expect(actions.changePropertyPlayer(0, 'NewPlayerName')).to.be.eql({
      type: actionTypes.CHANGE_PLAYER,
      payload: 'NewPlayerName',
      songId: 0,
    });
  });
  it('edit album', () => {
    expect(actions.changePropertyAlbum(0, 'NewAlbumName')).to.be.eql({
      type: actionTypes.CHANGE_ALBUM,
      payload: 'NewAlbumName',
      songId: 0,
    });
  });
  it('edit relise date', () => {
    expect(actions.changePropertyDate(0, 'NewDate')).to.be.eql({
      type: actionTypes.CHANGE_DATE,
      payload: 'NewDate',
      songId: 0,
    });
  });
});
