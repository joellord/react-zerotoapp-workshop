import React, {Component} from "react";

export default class Large extends Component {
  render() {
    return(
      <div>
        <h2>Current weather is WEATHER</h2>
        <hr width="80%" />
        <div className="row-2">
          <div className="col center">
            Maximum: MAX <br/>
            Minimum: MIN
          </div>

          <div className="col center">
            Wind of SPEED <br/>
            DIRECTION
          </div>
        </div>
      </div>
    )
  }
}