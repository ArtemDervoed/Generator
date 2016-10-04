import {playlistManagement} from '../mainReducer';
import * as actions from '../../actions/actions';
const testStore = [];
const initialState = [];
const firstSong = {
  key: 0,
  player: 'player',
  song: 'song',
  album: 'album',
  reliseDate: 'date',
};
const secongSong = {
  key: 1,
  player: 'player1',
  song: 'song1',
  album: 'album1',
  reliseDate: 'date1',
};
testStore.push(firstSong, secongSong);
initialState.push(firstSong, secongSong);
describe('work main reduer', () => {
  it('filter of song', () => {
    expect(playlistManagement(initialState, actions.filter(testStore))).to.be.eql(testStore);
  });
});
