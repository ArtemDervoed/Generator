/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React from 'react';
import {connect}	from	'react-redux';
import {removeSong} from '../actions/actions';
import * as changeProperty from '../actions/changeProperty';

class Song extends React.Component {
  removeThisSong(event) {
    this.props.dispatch(removeSong(this.props.songId));
  }
  onPlayerDblClick(event) {
    const value = prompt();
    this.props.dispatch(changeProperty.changePropertyPlayer(this.props.songId, value));
  }
  onSongDblClick(event) {
    const value = prompt();
    this.props.dispatch(changeProperty.changePropertySong(this.props.songId, value));
  }
  onAlbumDblClick(event) {
    const value = prompt();
    this.props.dispatch(changeProperty.changePropertyAlbum(this.props.songId, value));
  }
  onReliceDateDblClick(event) {
    const value = prompt();
    this.props.dispatch(changeProperty.changePropertyDate(this.props.songId, value));
  }
  render() {
    return (
      <li className="play-list--song">
        <div onDoubleClick={this.onPlayerDblClick.bind(this)}>Исполнитель:{this.props.player} </div>
        <div onDoubleClick={this.onSongDblClick.bind(this)}>Название: {this.props.song}</div>
        <div onDoubleClick={this.onAlbumDblClick.bind(this)}>Альбом: {this.props.album}</div>
        <div onDoubleClick={this.onReliceDateDblClick.bind(this)}>Дата выхода: {this.props.reliseDate}</div>
        <button onClick={this.removeThisSong.bind(this)}>Удалить</button>
      </li>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Song);
