/* eslint-disable no-unused-vars */
import React from 'react';
import {connect}	from	'react-redux';
import {removeSong} from '../actions/actions';

class Song extends React.Component {
  removeThisSong(event) {
    this.props.dispatch(removeSong(this.props.songId));
  }
  editThisSong(event) {
    console.log(this.props);
  }
  render() {
    return (
      <li className="play-list--song">
        <label onDoubleClick={this.editThisSong.bind(this)}>Исполнитель:{this.props.player} </label>
        <label onDoubleClick={this.editThisSong.bind(this)}>Название: {this.props.song}</label>
        <label onDoubleClick={this.editThisSong.bind(this)}>Альбом: {this.props.album}</label>
        <label onDoubleClick={this.editThisSong.bind(this)}>Дата выхода: {this.props.reliseDate}</label>
        <button onClick={this.removeThisSong.bind(this)}>Удалить</button>
      </li>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Song);
