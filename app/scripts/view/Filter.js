/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import {filter} from '../actions/actions';
// import {filterList} from '../utills/filterList';

class Filter extends React.Component {
  getinitialState() {
    return {
      displayedSongs: this.props.manager,
    };
  }
  searchSong(event) {
    const searchQuery = event.target.value.toLowerCase();
    const displayedSongs = this.props.manager.filter(element => {
      const searchValue = element.song.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    if (searchQuery === '') {
      this.props.dispatch(filter(this.props.manager));
    } else {
      this.props.dispatch(filter(displayedSongs));
    }
  }
  render() {
    return (
      <div className="filter">
        <input className="filter--inputbox" onChange={this.searchSong.bind(this)}/>
        <select name="property" id="0" className="filter--property">
         <option value="player">Исполнитель</option>
         <option value="song">Песня</option>
         <option value="album">Альбом</option>
         <option value="reliseDate">Дата релиза</option>
       </select>
      </div>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Filter);
