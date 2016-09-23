/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import InputBox from './InputBox';
import PlayList from './PlayList';
import Filter from './Filter';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <InputBox />
        <Filter />
        <PlayList />
      </div>
    );
  }
}
