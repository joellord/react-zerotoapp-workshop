import React, {Component} from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1
    };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState({counter: this.state.counter + 1});
  }

  handleDecrement() {
    this.setState({counter: this.state.counter - 1});
  }

  render() {
    return (
      <div>
        <h1>The Mighty Counter</h1>
        <button onClick={this.handleIncrement}>+</button>
        <span>{this.state.counter}</span>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}

