import {playlistManagement} from '../mainReducer';
import * as actions from '../../actions/actions';
const testStore = [];
const initialState = [];
const song = {
  key: 0,
  player: 'player',
  song: 'song',
  album: 'album',
  reliseDate: 'date',
};
initialState.push(song);
describe('work main reduer', () => {
  it('remove song', () => {
    expect(playlistManagement(initialState, actions.removeSong(0))).to.be.eql(testStore);
  });
});
