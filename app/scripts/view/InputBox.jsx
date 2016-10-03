/* eslint-disable no-unused-vars */
import React from 'react';
import	{connect}	from	'react-redux';
import {addSong} from '../actions/actions';
import * as API from '../API';

class InputBox extends React.Component {
  componentWillMount() {
    this.input = {
      key: '',
      player: '',
      song: '',
      album: '',
      reliseDate: '',
    };
  }
  onButtonClick(event) {
    let counter = (this.props.manager.length === 0) ? 0 : this.props.manager[this.props.manager.length - 1].key;
    const song = {
      key: ++counter,
      player: this.input.player.value,
      song: this.input.song.value,
      album: this.input.album.value,
      reliseDate: this.input.reliseDate.value,
    };
    this.props.dispatch(addSong(song));
    API.addData(counter, song);
  }
  render() {
    return (
      <div className="inputbox">
        <input placeholder="Исполнитель" className="inputbox--player __decoration" ref={
          node => {
            this.input.player	=	node;
          }
        } />
        <input placeholder="Песня" className="inputbox--song __decoration" ref={
          node => {
            this.input.song	=	node;
          }
        } />
        <input placeholder="Альбом" className="inputbox--album __decoration" ref={
          node => {
            this.input.album	=	node;
          }
        } />
        <input placeholder="Дата релиза" className="inputbox--relise-date __decoration" type="date" ref={
          node => {
            this.input.reliseDate	=	node;
          }
        } />
        <button onClick={this.onButtonClick.bind(this)}>Добавить</button>
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(InputBox);
