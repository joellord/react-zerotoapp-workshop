import store from "./store";

const getWeatherData = () => {
  let APIKEY = "e2af322c6fcd64d19d88e1153ae8892f";
  let city = store.getGlobalState().searchValue;

  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${APIKEY}`;

  return fetch(url).then(resp => resp.json()).then(data => {
    store.updateGlobalState(data);
  });
};

export {
  getWeatherData
}
