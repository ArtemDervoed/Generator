import {playlistManagement} from '../mainReducer';
import * as actions from '../../actions/changeProperty';
const testStore = [];
const initialState = [];
const song = {
  key: 0,
  player: 'player',
  song: 'song',
  album: 'album',
  reliseDate: 'date',
};
const newSong = {
  key: 0,
  player: 'player',
  song: 'song',
  album: 'newAlbum',
  reliseDate: 'date',
};
testStore.push(newSong);
initialState.push(song);
describe('work main reduer', () => {
  it('change property album', () => {
    expect(playlistManagement(initialState, actions.changePropertyAlbum(0, 'newAlbum'))).to.be.eql(testStore);
  });
});
