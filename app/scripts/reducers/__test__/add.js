// REVIEW: предлагаю все тесты, связанные с тестированием одного редьюсера,
// объединять в один файл
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
testStore.push(song);
describe('work main reduer', () => {
  it('add new song', () => {
    expect(playlistManagement(initialState, actions.addSong(song))).to.be.eql(testStore);
  });
});
