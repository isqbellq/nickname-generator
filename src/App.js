import React, { Component } from 'react';
import './App.css';
import GetActivity from "./components/GetActivity";
import Activities from "./components/Activities";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Time tracker</h1>
          <GetActivity />
          <Activities />
      </div>
    );
  }
}

export default App;