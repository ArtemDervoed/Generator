import React from 'react';
import	{	connect	}	from	'react-redux';

class PlayList extends React.Component {
  render() {
    return (
      <ul className="play-list">
        <li className="play-list--song">first</li>
        <li className="play-list--song">second</li>
        <li className="play-list--song">third</li>
        <li className="play-list--song">fourth</li>
      </ul>
    );
  }
}

const	mapStateToProps	=	(state)	=> ({
  ...state,
});

export default connect(mapStateToProps)(PlayList);
