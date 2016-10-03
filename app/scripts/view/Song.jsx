/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React from 'react';
import {connect}	from	'react-redux';
import SongProp from './SongProp';
import {removeSong} from '../actions/actions';
import * as changeProperty from '../actions/changeProperty';
import * as API from '../API';

class Song extends React.Component {
  removeThisSong(event) {
    this.props.dispatch(removeSong(this.props.songId));
    API.removeData(this.props.songId);
  }
  applyNewPlayer(newPlayer) {
    this.dispatch(changeProperty.changePropertyPlayer(this.songId, newPlayer));
    API.setPlayer(this.songId, newPlayer);
  }
  applyNewSong(newSong) {
    this.dispatch(changeProperty.changePropertySong(this.songId, newSong));
    API.setSong(this.songId, newSong);
  }
  applyNewAlbum(newAlbum) {
    this.dispatch(changeProperty.changePropertyAlbum(this.songId, newAlbum));
    API.setAlbum(this.songId, newAlbum);
  }
  applyNewDate(newDate) {
    this.dispatch(changeProperty.changePropertyDate(this.songId, newDate));
    API.setReliseDate(this.songId, newDate);
  }
  render() {
    return (
      <section className="play-list--song">
        <SongProp
          songId={this.props.songId}
          header="Исполнитель"
          value={this.props.player}
          applyProps={this.applyNewPlayer}/>
        <SongProp
          songId={this.props.songId}
          header="Название песни"
          value={this.props.song}
          applyProps={this.applyNewSong}/>
        <SongProp
          songId={this.props.songId}
          header="Альбом"
          value={this.props.album}
          applyProps={this.applyNewAlbum}/>
        <SongProp
          songId={this.props.songId}
          header="Дата релиза"
          value={this.props.reliseDate}
          applyProps={this.applyNewDate}/>
        <button onClick={this.removeThisSong.bind(this)}>Удалить</button>
      </section>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Song);
