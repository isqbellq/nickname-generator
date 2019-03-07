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

  handleSubmit = (e) => {
    alert("idk");
    this.setState({
      start: "test start",
      end: "test end",
      activities: ["hmmm", "test"]
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
          <h1>Time tracker</h1>
          <GetActivity 
          start={this.state.start}
          end={this.state.end}
          activities={this.state.activities} 
          handleSubmit={this.handleSubmit}
          />
          <Activities 
          start={this.state.start}
          end={this.state.end}
          activities={this.state.activities} 
          />
      </div>
    );
  }
}

export default App;