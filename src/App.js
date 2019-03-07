import React, { Component } from 'react';
import './App.css';
import GetActivity from "./components/GetActivity";
import Activities from "./components/Activities";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "",
      end: "",
      activities: []
    }
  }

  render() {
    return (
      <div className="App">
          <h1>Time tracker</h1>
          <GetActivity 
          start={this.state.start}
          end={this.state.end}
          activities={this.state.activities} 
          />
          <Activities />
      </div>
    );
  }
}

export default App;