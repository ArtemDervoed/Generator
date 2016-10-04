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
  player: 'newplayer',
  song: 'song',
  album: 'album',
  reliseDate: 'date',
};
testStore.push(newSong);
initialState.push(song)
describe('work main reduer', () => {
  it('change property player', () => {
    expect(playlistManagement(initialState, actions.changePropertyPlayer(0, 'newplayer'))).to.be.eql(testStore);
  });
});
