/* eslint-disable no-unused-vars */
import React from 'react';
import	{connect}	from	'react-redux';
import Song from './Song';

class PlayList extends React.Component {
  render() {
    return (
      <ul className="play-list">
      {
        this.props.manager.map(unit => {
          return (
            <Song songId={unit.key} key={unit.key} player={unit.player} song={unit.song} album={unit.album} reliseDate={unit.reliseDate} />
          );
        })
      }
      </ul>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(PlayList);
