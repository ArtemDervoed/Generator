import React from 'react';
import List from './List/list';

export default class ListBox extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="list-box">
        <input className="list-box--search" />
        <List />
      </div>
    );
  }
}
