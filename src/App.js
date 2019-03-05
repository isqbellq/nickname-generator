import React, { Component } from 'react';
import './App.css';
import CurrentDate from "./components/Date";
import HelloWorld from "./components/HelloWorld";
import Alert from "./components/Alert";
import Converter from "./components/Converter";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
          <CurrentDate />
          <HelloWorld />
          <Alert />
          <Converter />
          <Form />
      </div>
    );
  }
}

export default App;
