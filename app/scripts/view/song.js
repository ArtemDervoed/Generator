import React from 'react';
import	{	connect	}	from	'react-redux';

class Song extends React.Component {
  render() {
    return (
      <div className="play-list--song">
        <span>Исполнитель:{this.props.player}</span>
        <span>Название: {this.props.song}</span>
        <span>Альбом: {this.props.album}</span>
        <span>Дата выхода: {this.props.reliseDate}</span>
      </div>
    );
  }
}

const	mapStateToProps	=	(state)	=> ({
  ...state,
});

export default connect(mapStateToProps)(Song);
