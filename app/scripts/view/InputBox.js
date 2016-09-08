import React from 'react';
import	{connect}	from	'react-redux';
import {addSong} from '../actions/actions';

let input = {
  player:'',
  song:'',
  album:'',
  reliseDate:''
};

class InputBox extends React.Component {
  addNewSong(event) {
    this.props.dispatch(addSong({
      player:input.player.value,
      song:input.song.value,
      album:input.album.value,
      reliseDate:input.reliseDate.value
    }));
    console.log('hello');
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
