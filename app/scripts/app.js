import ReactDOM from 'react-dom';
import React from 'react';
import 'styles/index.css';
import Storage from './storage';
let storage;
let counter;

export default class Application {
  constructor() {
    this.$document = $(document);
    storage = new Storage();
    counter = 0;
  }
  add(){
    const songIn = document.getElementsByClassName('song');
    const musicPlayerIn = document.getElementsByClassName('musicPlaer');
    const music = { song:songIn[0].value, player:musicPlayerIn[0].value };
    songIn[0].value="";
    musicPlayerIn[0].value="";
    counter = storage.getLengthStorage();
    storage.addData(counter,music);
  }
  start() {
    const InputBox = React.createClass({
      render: () => {
        return (
          <div className="input-box">
            <input type="text" className="song" />
            <input type="text" className="musicPlaer" />
            <button className="adder" onClick={this.add} />
          </div>
        );
      },
    });
    ReactDOM.render(
      <InputBox />,
      document.getElementById('main-header')
    );
  }
}
