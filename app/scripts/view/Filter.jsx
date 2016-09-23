/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

class Filter extends React.Component {
  onPropertyChangeClick(event) {
    const typeList = document.getElementsByClassName('filter--property')[0];
    if (typeList.selectedIndex !== -1) {
      this.props.dispatch(actions.changeFilterProperty(typeList.selectedIndex));
    }
  }
  onFilterValueChange(event) {
    const searchQuery = event.target.value.toLowerCase();
    const displayedSongs = this.props.initState.filter(element => {
      if (this.props.searchProps === 0) {
        const searchValue = element.player.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
      }
      if (this.props.searchProps === 1) {
        const searchValue = element.song.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
      }
      if (this.props.searchProps === 2) {
        const searchValue = element.album.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
      }
      if (this.props.searchProps === 3) {
        const searchValue = element.reliseDate.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
      }
      return '';
    });
    if (searchQuery.length === 0) {
      this.props.dispatch(actions.filter(this.props.initState));
    } else {
      this.props.dispatch(actions.filter(displayedSongs));
    }
  }
  render() {
    return (
      <section className="filter">
        <input className="filter--inputbox" onChange={this.onFilterValueChange.bind(this)}/>
        <select name="property" className="filter--property" onClick={this.onPropertyChangeClick.bind(this)}>
         <option value="player">Исполнитель</option>
         <option value="song">Песня</option>
         <option value="album">Альбом</option>
         <option value="reliseDate">Дата релиза</option>
       </select>
      </section>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Filter);
