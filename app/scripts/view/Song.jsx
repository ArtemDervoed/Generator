/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React from 'react';
import {connect}	from	'react-redux';
import {removeSong} from '../actions/actions';
import * as changeProperty from '../actions/changeProperty';
import * as API from '../API';

class Song extends React.Component {
  removeThisSong(event) {
    this.props.dispatch(removeSong(this.props.songId));
    API.removeData(this.props.songId);
  }
  onPlayerDblClick(event) {
    const input = event.target.parentNode.childNodes[2].classList;
    const currentValue = event.target.parentNode.childNodes[1].classList;
    currentValue.add("__hidden");
    input.remove("__hidden");
  }
  onSongDblClick(event) {
    const input = event.target.parentNode.childNodes[2].classList;
    const currentValue = event.target.parentNode.childNodes[1].classList;
    currentValue.add("__hidden");
    input.remove("__hidden");
  }
  onAlbumDblClick(event) {
    const input = event.target.parentNode.childNodes[2].classList;
    input.remove("__hidden");
    const currentValue = event.target.parentNode.childNodes[1].classList;
    currentValue.add("__hidden");
  }
  onReliceDateDblClick(event) {
    const input = event.target.parentNode.childNodes[2].classList;
    const currentValue = event.target.parentNode.childNodes[1].classList;
    currentValue.add("__hidden");
    input.remove("__hidden");
  }
  applyNewSong(event) {
    const value = event.target.value;
    API.setSong(this.props.songId, value);
    this.props.dispatch(changeProperty.changePropertySong(this.props.songId, value));
    event.target.classList.add("__hidden");
    const currentValue = event.target.parentNode.childNodes[1].classList;
    currentValue.remove("__hidden");
  }
  applyNewPlayer(event) {
    const value = event.target.value;
    API.setPlayer(this.props.songId, value);
    this.props.dispatch(changeProperty.changePropertyPlayer(this.props.songId, value));
    event.target.classList.add("__hidden");
    const currentValue = event.target.parentNode.childNodes[1].classList;
    currentValue.remove("__hidden");
  }
  applyNewAlbum(event) {
    const value = event.target.value;
    API.setAlbum(this.props.songId, value);
    this.props.dispatch(changeProperty.changePropertyAlbum(this.props.songId, value));
    event.target.classList.add("__hidden");
    const currentValue = event.target.parentNode.childNodes[1].classList;
    currentValue.remove("__hidden");
  }
  applyNewDate(event) {
    const value = event.target.value;
    API.setReliseDate(this.props.songId, value);
    this.props.dispatch(changeProperty.changePropertyDate(this.props.songId, value));
    event.target.classList.add("__hidden");
    const currentValue = event.target.parentNode.childNodes[1].classList;
    currentValue.remove("__hidden");
  }
  render() {
    return (
      <li className="play-list--song">
        <div className="song-value" onDoubleClick={this.onSongDblClick.bind(this)}>
          <label>
            Название:
          </label>
          <span>{this.props.song}</span>
          <input onBlur={this.applyNewSong.bind(this)} type="text" className="song-editor __hidden"/>
        </div>
        <div className="player-value" onDoubleClick={this.onPlayerDblClick.bind(this)}>
          <label>
            Исполнитель:
          </label>
          <span>{this.props.player}</span>
          <input onBlur={this.applyNewPlayer.bind(this)} type="text" className="player-editor __hidden"/>
        </div>
        <div className="album-value" onDoubleClick={this.onAlbumDblClick.bind(this)}>
          <label>
            Альбом:
          </label>
          <span>{this.props.album}</span>
          <input onBlur={this.applyNewAlbum.bind(this)} type="text" className="album-editor __hidden"/>
        </div>
        <div className="date-value" onDoubleClick={this.onReliceDateDblClick.bind(this)}>
          <label>
            Дата выхода:
          </label>
          <span>{this.props.reliseDate}</span>
          <input onBlur={this.applyNewDate.bind(this)} type="text" className="date-editor __hidden"/>
        </div>
        <button onClick={this.removeThisSong.bind(this)}>Удалить</button>
      </li>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Song);
