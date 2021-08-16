import React, {Component, useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header.js';
import Body from './components/Body.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    )
  };
}

export default App;
