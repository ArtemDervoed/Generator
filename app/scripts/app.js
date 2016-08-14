import 'styles/index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Layout from './view/layout';
import Storage from './storage';

export default class Application {
  constructor() {
    this.$document = $(document);
  }
  start() {
    const store = createStore( () => { }, { });
    ReactDOM.render(
      <Provider store= {store}>
        <Layout />
      </Provider>
      , document.getElementById('app'));
  }
}
