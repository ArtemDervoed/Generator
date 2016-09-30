/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import * as API from '../API';

let searchProps = 0;
class Filter extends React.Component {
  onPropertyChangeClick(event) {
    const typeList = document.getElementsByClassName('filter--property')[0];
    if (typeList.selectedIndex !== -1) {
      searchProps = typeList.selectedIndex;
    }
  }
  onFilterValueChange(event) {
    const searchQuery = event.target.value;
    const displayedSongs = API.getAllStorage().filter(element => {
      let searchValue = '';
      if (searchProps === 0) {
        searchValue = element.player;
      }
      if (searchProps === 1) {
        searchValue = element.song;
      }
      if (searchProps === 2) {
        searchValue = element.album;
      }
      if (searchProps === 3) {
        searchValue = element.reliseDate;
      }
      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.props.dispatch(actions.filter(displayedSongs));
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
