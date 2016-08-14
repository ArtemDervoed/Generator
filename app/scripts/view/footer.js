import React from 'react';
import ControlBox from './Footer/control-box';

export default class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <footer>
        <ControlBox />
      </footer>
    );
  }
}
