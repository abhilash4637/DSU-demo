import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store/store'


class App extends Component {
  render() {
    return (
    <div>
        <Provider store={store}>

        </Provider>
    </div>
    );
  }
}

export default App;


