import React, { Component } from 'react';
import './App.css';
import GetActivity from "./components/GetActivity";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Time tracker</h1>
          <GetActivity />
      </div>
    );
  }
}

export default App;