import React, {Component} from "react";

export default class Large extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: [{description: ""}],
      temp: {max: 0, min: 0},
      speed: 0,
      deg: 0
    };
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  render() {
    let windDirection = {transform: `rotate(${this.state.deg-180}deg)`};

    return(
      <div>
        <h2>Current weather is {this.state.weather.description}</h2>
        <hr width="80%" />
        <div className="row-2">
          <div className="col center">
            Maximum: {this.state.temp.max} <br/>
            Minimum: {this.state.temp.min}
          </div>

          <div className="col center">
            Wind of {this.state.speed} km/h<br/>
            <div style={windDirection}>V</div>
          </div>
        </div>
      </div>
    )
  }
}