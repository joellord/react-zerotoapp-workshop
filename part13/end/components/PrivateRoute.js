import React, {Component} from "react";
import {isAuthenticated} from "../utils/auth";
import {Route, Redirect} from "react-router-dom";

export default class PrivateRoute extends Component {
  render() {
    if (isAuthenticated()) {
      let Component = this.props.component;
      let props = {...this.props};
      props.component = undefined;
      return (<Route {...props} render={props => <Component {...props} />} />);
    } else {
      return (<Redirect to="/unauthorized" />);
    }
  }
}