import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import Callback from "./components/Callback";
import Unauthorized from "./components/Unauthorized";
import Weather from "./components/Weather";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/weather" component={Weather} />
            <Route path="/callback" component={Callback} />
            <Route path="/unauthorized" component={Unauthorized} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
