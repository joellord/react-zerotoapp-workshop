import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import Callback from "./components/Callback";
import Unauthorized from "./components/Unauthorized";
import Weather from "./components/Weather";
import Navbar from "./components/Navbar";

import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/weather" component={Weather} />
          <Route path="/callback" component={Callback} />
          <Route path="/unauthorized" component={Unauthorized} />
        </Router>
      </div>
    );
  }
}

export default App;
