import Emitter from "es6-event-emitter";

let state = {};

let initialState = {
  city: {name: "--Placeholder--"},
  list: [],
  isLoggedIn: false,
  searchValue: "Toronto, CA"
};

class Store extends Emitter {
  constructor(initialState) {
    super();
    state = initialState;
  }

  updateGlobalState(changes) {
    state = Object.assign({}, state, changes);
    this.trigger("stateChange");
  }

  getGlobalState() {
    return state;
  }

  subscribe(cb) {
    this.on("stateChange", cb);
  }

  unsubscribe(cb) {
    this.off("stateChange", cb);
  }
}

const instance = new Store(initialState);

export default instance;