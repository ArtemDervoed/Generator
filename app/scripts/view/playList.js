import React from 'react';
import	{connect}	from	'react-redux';
import Song from './song';

class PlayList extends React.Component {
  render() {
    return (
      <ul className="play-list">
      {
          this.props.input.map((unit) => {
            return (
              <Song player={unit.player} song={unit.song} album={unit.album} reliseDate={unit.reliseDate} />
            );
          })
      }
      </ul>
    );
  }
}

const	mapStateToProps	=	(state)	=> ({
  ...state,
});

export default connect(mapStateToProps)(PlayList);
