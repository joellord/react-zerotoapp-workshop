import React, {Component} from "react";
import {handleAuth} from "../utils/auth";
import {withRouter} from "react-router-dom";

class Callback extends Component {
  componentWillMount() {
    handleAuth(() => {
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <div>Reticulating splines...</div>
    )
  }
}

export default withRouter(Callback);