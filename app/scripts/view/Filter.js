/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
// import {filterList} from '../utills/filterList';
class Filter extends React.Component {
  getinitialState() {
    return {
      displayedSongs: this.props.manager,
    };
  }
  choosePropertySearch(event) {
    const typeList = document.getElementsByClassName('filter--property')[0];
    if (typeList.selectedIndex !== -1) {
      this.props.dispatch(actions.changeFilterProperty(typeList.selectedIndex));
      console.log(this.props);
    }
  }
  searchSong(event) {
    const searchQuery = event.target.value.toLowerCase();
    const displayedSongs = this.props.manager.filter(element => {
      const searchValue = element.song.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });
    if (searchQuery === '') {
      this.props.dispatch(actions.filter(this.props.manager));
    } else {
      this.props.dispatch(actions.filter(displayedSongs));
    }
  }
  render() {
    return (
      <section className="filter">
        <input className="filter--inputbox" onChange={this.searchSong.bind(this)}/>
        <select name="property" className="filter--property" onClick={this.choosePropertySearch.bind(this)}>
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
