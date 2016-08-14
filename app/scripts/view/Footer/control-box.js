import React from 'react';

export default class ControlBox extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="control-box">
        <button className="control-box--clear"> Clear </button>
      </div>
    );
  }
}
