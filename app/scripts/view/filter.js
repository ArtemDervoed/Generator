import React from 'react';
import {connect} from 'react-redux';
import {filter} from '../actions/actions';

class Filter extends React.Component {
  getinitialState() {
    return {
      displayedSongs: this.props.input
    };
  }
  searchSong(event) {
    let searchQuery = event.target.value.toLowerCase();
    let displayedSongs = this.props.input.filter((element) => {
      let searchValue = element.song.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.props.dispatch(filter(displayedSongs));
  }
  render() {
    return (
      <div className="filter">
        <input className="filter--inputbox" onChange={this.searchSong.bind(this)}/>
      </div>
    );
  }
}

const	mapStateToProps	=	(state)	=> ({
  ...state,
});

export default connect(mapStateToProps)(Filter);
