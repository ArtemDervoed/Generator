import React from 'react';

export default class List extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul className="list-box--list">
        <li className="list-box--list--element" >{} DATA </li>
      </ul>
    );
  }
}
