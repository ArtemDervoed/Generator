import React from 'react';

export default class InputBox extends React.Component {
  constructor() {
    super();
  }
  add(){
    
  }
  render() {
    return (
      <div className="input-box">
        <input className="input-box--song" />
        <button className="input-box--adder" onClick={this.add}> Add </button>
      </div>
    );
  }
}
