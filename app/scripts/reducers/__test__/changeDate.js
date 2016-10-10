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
  album: 'album',
  reliseDate: 'newdate',
};
testStore.push(newSong);
initialState.push(song);
describe('work main reduer', () => {
  it('change property date', () => {
    expect(playlistManagement(initialState, actions.changePropertyDate(0, 'newdate'))).to.be.eql(testStore);
  });
});
