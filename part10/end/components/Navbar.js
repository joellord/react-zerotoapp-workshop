import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import {login, logout} from "../utils/auth";
import store from "../utils/store";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = store.getGlobalState();
    this.updateState = this.updateState.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    login();
  }

  handleLogout() {
    logout();
    this.props.history.push("/");
  }

  componentWillMount() {
    store.subscribe(this.updateState);
  }

  componentWillUnmount() {
    store.unsubscribe(this.updateState);
  }

  updateState() {
    this.setState(store.getGlobalState());
  }

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
        <div className="nav-actions">
          {!this.state.isLoggedIn &&
          <button onClick={this.handleLogin}>Login</button>
          }

          {this.state.isLoggedIn &&
          <button onClick={this.handleLogout}>Logout</button>
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar);