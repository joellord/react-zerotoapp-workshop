import store from "./store";

const getWeatherData = () => {
  let APIKEY = "c95951b6fec7e1a5b79aad4db8eaca2d";
  let city = "London, UK";

  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=7&appid=${APIKEY}`;

  return fetch(url).then(resp => resp.json()).then(data => {
    store.updateGlobalState(data);
  });
};

export {
  getWeatherData
}
