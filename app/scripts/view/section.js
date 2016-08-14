import React from 'react';
import ListBox from './Section/list-box';
export default class Section extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section>
        <ListBox />
      </section>
    );
  }
}
