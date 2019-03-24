import React, { Component } from 'react';
import './App.css';
import GetActivity from "./components/GetActivity";
import Activities from "./components/Activities";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: [23, 34],
      activities: ["boh", "ok"]
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert("hi");  
    this.setState(prevState => {
      prevState.duration.push(2);
      prevState.activities.push("activity");     
    }); 
  }

  render() {
    return (
      <div className="App">
          <h1>Time tracker</h1>
          <GetActivity 
            handleSubmit={this.handleSubmit}
          />
          <Activities 
            duration={this.state.duration}
            activities={this.state.activities} 
          />
      </div>
    );
  }
}

export default App;