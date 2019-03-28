import React, {Component} from "react";
import {Link} from "react-router-dom";
import {login, isAuthenticated, logout} from "../utils/auth";

export default class Navbar extends Component {
  handleLogin() {
    login();
  }

  handleLogout() {
    logout();
  }

  render() {
    console.log(isAuthenticated());
    return(
      <div className="navbar">
        <div className="nav-title">From Zero To App</div>
        <div className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
          </ul>
        </div>
        <div className="nav-actions">
          {!isAuthenticated() &&
          <button onClick={this.handleLogin}>Login</button>
          }

          {isAuthenticated() &&
          <button onClick={this.handleLogout}>Logout</button>
          }
        </div>
      </div>
    )
  }
}