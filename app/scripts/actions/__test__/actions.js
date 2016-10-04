import * as actionTypes from '../actionTypes';
import * as actions from '../actions';

describe('actions with a playlist', () => {
  it('add new song', () => {
    expect(actions.addSong('NEW_SONG')).to.be.eql({
      type: actionTypes.ADD_SONG,
      payload: 'NEW_SONG',
    });
  });
  it('remove song', () => {
    expect(actions.removeSong(0)).to.be.eql({
      type: actionTypes.REMOVE_SONG,
      payload: 0,
    });
  });
  it('get initial state of playlist', () => {
    expect(actions.getInitialState([])).to.be.eql({
      type: actionTypes.GET_INITIAL_STATE,
      payload: [],
    });
  });
  it('filter songs', () => {
    expect(actions.filter([0, 1, 2])).to.be.eql({
      type: actionTypes.FILTER,
      payload: [0, 1, 2],
    });
  });
  it('change filter property', () => {
    expect(actions.changeFilterProperty(0)).to.be.eql({
      type: actionTypes.FILTER_PROPERTY,
      payload: 0,
    });
  });
});
