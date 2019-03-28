import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import Callback from "./components/Callback";
import Unauthorized from "./components/Unauthorized";
import Weather from "./components/Weather";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
