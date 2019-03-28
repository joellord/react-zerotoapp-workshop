import React, {Component} from "react";

export default class Small extends Component {
  constructor(props) {
    super(props);
    if (!props.dt) {
      props = {
        dt: 0,
        temp: {max: 0, min: 0}
      };
    }
    this.state = props;
  }

  render() {
    let dayOfWeek = (dt) => {
      let d = new Date(dt * 1000);
      return d.toLocaleDateString(window.navigator.language, {weekday: 'long'});
    };

    return(
      <div className="col center border">
        Weather for {dayOfWeek(this.state.dt)} <br/>
        {this.state.temp.max} C / {this.state.temp.min} C
      </div>
    )
  }
}