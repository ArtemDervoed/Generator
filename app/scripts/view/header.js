import React from 'react';
import InputBox from './Header/input-box';

export default class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header>
        <InputBox />
      </header>
    );
  }
}
