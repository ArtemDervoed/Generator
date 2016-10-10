/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import * as API from '../API';

class Filter extends React.Component {
  componentDidMount() {
    this.searchProps = 0;
  }
  onPropertyChangeClick(event) {
    const typeList = this.refs.searchParametrs;
    if (typeList.selectedIndex !== -1) {
      this.searchProps = typeList.selectedIndex;
    }
  }
  onFilterValueChange(event) {
    const searchQuery = event.target.value;
    const displayedSongs = API.getAllStorage().filter(element => {
      let searchValue = '';
      if (this.searchProps === 0) {
        searchValue = element.player;
      }
      if (this.searchProps === 1) {
        searchValue = element.song;
      }
      if (this.searchProps === 2) {
        searchValue = element.album;
      }
      if (this.searchProps === 3) {
        searchValue = element.reliseDate;
      }
      return searchValue.indexOf(searchQuery) !== -1;
    });
    this.props.dispatch(actions.playlist(displayedSongs));
  }
  render() {
    return (
      <section className="filter">
        <input className="filter--inputbox" onChange={this.onFilterValueChange.bind(this)}/>
        <select name="property" className="filter--property" ref="searchParametrs" onClick={this.onPropertyChangeClick.bind(this)}>
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
