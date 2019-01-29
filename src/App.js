import React, { Component } from 'react';
import './App.scss';

import NavBar from './Components/NavBar';
import TourList from './Components/TourList/iindex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <TourList />
      </div>
    );
  }
} 

export default App;
