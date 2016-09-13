import React from 'react';
import	{	connect	}	from	'react-redux';
import {removeSong} from '../actions/actions';

class Song extends React.Component {
  removeThisSong(event) {
    // this.props.dispatch(removeSong(this.props.key));
    console.log(this.props);
  }
  render() {
    return (
      <li className="play-list--song">
        <label>Исполнитель:{this.props.player}</label>
        <label>Название: {this.props.song}</label>
        <label>Альбом: {this.props.album}</label>
        <label>Дата выхода: {this.props.reliseDate}</label>
        <button onClick={this.removeThisSong.bind(this)}>Удалить</button>
      </li>
    );
  }
}

const	mapStateToProps	=	(state)	=> ({
  ...state,
});

export default connect(mapStateToProps)(Song);
