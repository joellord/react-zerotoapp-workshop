import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <div className="nav-title">From Zero To App</div>
        <div className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}