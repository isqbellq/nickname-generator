import React, { Component } from 'react';
import './App.css';
import GetActivity from "./components/GetActivity";
import CurrentDate from "./components/Date";
import HelloWorld from "./components/HelloWorld";
import Alert from "./components/Alert";
import Converter from "./components/Converter";
import Form from "./components/Form";

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


// <CurrentDate />
// <HelloWorld />
// <Alert />
// <Converter />
// <Form />