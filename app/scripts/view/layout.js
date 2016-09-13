import React from 'react';
import {connect}	from	'react-redux';
import InputBox from './InputBox';
import PlayList from './playList';
import Filter from './filter';

export default class Layout extends React.Component {
  render() {
    return(
      <div>
        <InputBox />
        <Filter />
        <PlayList />
      </div>
    );
  }
}
