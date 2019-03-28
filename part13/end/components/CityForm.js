import React, {Component} from "react";
import {getWeatherData} from "../utils/weatherAPI";
import store from "../utils/store";

export default class CityForm extends Component {
  constructor(props) {
    super(props);

    this.state = store.getGlobalState();
    this.updateState = this.updateState.bind(this);
    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
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

  handleSearchValueChange(e) {
    store.updateGlobalState({searchValue: e.target.value});
  }

  handleGetWeatherClick() {
    getWeatherData();
  }

  render() {
    return(
      <div>
        <input type="text" value={this.state.searchValue} onChange={this.handleSearchValueChange} />
        <button onClick={this.handleGetWeatherClick}>Get Weather!</button>
      </div>
    )
  }
}