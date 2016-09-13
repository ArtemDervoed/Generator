import React from 'react';
import	{connect}	from	'react-redux';
import {addSong} from '../actions/actions';

let input = {
  key: '',
  player: '',
  song: '',
  album: '',
  reliseDate: ''
};
class InputBox extends React.Component {
  addNewSong(event) {
    let counter = this.props.input.length;
    this.props.dispatch(addSong({
      key: counter,
      player: input.player.value,
      song: input.song.value,
      album: input.album.value,
      reliseDate: input.reliseDate.value
    }));
  }
  render() {
    return (
      <div className="inputbox">
        <input className="inputbox--player __decoration" ref={node => { input.player	=	node }} />
        <input className="inputbox--song __decoration" ref={node => { input.song	=	node }} />
        <input className="inputbox--album __decoration" ref={node => { input.album	=	node }} />
        <input className="inputbox--relise-date __decoration" type="date" ref={node => { input.reliseDate	=	node }} />
        <button onClick={this.addNewSong.bind(this)}>Add</button>
      </div>
    );
  }
}

const	mapStateToProps	=	(state)	=> ({
  ...state,
});

export default connect(mapStateToProps)(InputBox);
