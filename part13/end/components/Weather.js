import React, {Component} from "react";
import Large from "./Weather/Large";
import Small from "./Weather/Small";
import CityForm from "./CityForm";
import {getWeatherData} from "../utils/weatherAPI";
import store from "../utils/store";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = store.getGlobalState();
    getWeatherData();

    this.updateState = this.updateState.bind(this);
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
    return (
      <div>
        <h1>Weather for {this.state.city.name}</h1>

        <CityForm/>

        <Large {...this.state.list[0]} />

        <br/>

        <div className="row-3">
          {this.state.list.slice(1,4).map(weatherData => {
            return (
              <Small {...weatherData} />
            );
          })}
        </div>
        <div className="row-3">
          {this.state.list.slice(4, 7).map(weatherData => {
            return (
              <Small {...weatherData} />
            );
          })}
        </div>
      </div>
    )
  }
}