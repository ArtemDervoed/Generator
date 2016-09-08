import React from 'react';
import {connect} from 'react-redux';

class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <input className="filter--inputbox"/>
      </div>
    );
  }
}

const	mapStateToProps	=	(state)	=> ({
  ...state,
});

export default connect(mapStateToProps)(Filter);
