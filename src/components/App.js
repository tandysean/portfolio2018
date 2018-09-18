import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {HomeView} from './HomeView';

class App extends Component {
  render() {
    return(
      <HomeView />
    );
  }
}

export default hot(module)(App);
