import store from "./store";

const data = {
  "city": {
    "id": 6167865,
    "name": "Toronto",
    "coord": {"lon": -79.3873, "lat": 43.654},
    "country": "CA",
    "population": 4612191
  },
  "cod": "200",
  "message": 7.2071844,
  "cnt": 7,
  "list": [{
    "dt": 1553792400,
    "temp": {"day": 8.36, "min": 3.95, "max": 8.36, "night": 3.95, "eve": 6.49, "morn": 5.77},
    "pressure": 1017.6,
    "humidity": 95,
    "weather": [{"id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d"}],
    "speed": 7.61,
    "deg": 217,
    "clouds": 100,
    "rain": 3.76
  }, {
    "dt": 1553878800,
    "temp": {"day": 6.69, "min": 1.47, "max": 6.69, "night": 2.04, "eve": 3.65, "morn": 1.47},
    "pressure": 1019.67,
    "humidity": 96,
    "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    "speed": 1.12,
    "deg": 90,
    "clouds": 20,
    "rain": 1.44
  }, {
    "dt": 1553965200,
    "temp": {"day": 3.03, "min": -0.48, "max": 3.03, "night": -0.48, "eve": 1.48, "morn": 1.92},
    "pressure": 1010.52,
    "humidity": 100,
    "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
    "speed": 3.85,
    "deg": 356,
    "clouds": 92,
    "rain": 15.8,
    "snow": 1.42
  }, {
    "dt": 1554051600,
    "temp": {"day": 1.69, "min": -0.88, "max": 2.15, "night": 0.9, "eve": 2.15, "morn": -0.88},
    "pressure": 1028.56,
    "humidity": 0,
    "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
    "speed": 9.66,
    "deg": 71,
    "clouds": 86,
    "snow": 0.65
  }, {
    "dt": 1554138000,
    "temp": {"day": 3.19, "min": 0.24, "max": 3.26, "night": 1.67, "eve": 3.26, "morn": 0.24},
    "pressure": 1026.16,
    "humidity": 0,
    "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
    "speed": 10.31,
    "deg": 65,
    "clouds": 55,
    "snow": 0.14
  }, {
    "dt": 1554224400,
    "temp": {"day": 2.09, "min": -1.11, "max": 2.69, "night": -1.11, "eve": 2.69, "morn": 0.58},
    "pressure": 1022.62,
    "humidity": 0,
    "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
    "speed": 3.94,
    "deg": 33,
    "clouds": 76
  }, {
    "dt": 1554310800,
    "temp": {"day": 7.07, "min": -1.3, "max": 7.07, "night": 2.7, "eve": 6.3, "morn": -1.3},
    "pressure": 1025.24,
    "humidity": 0,
    "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
    "speed": 4.51,
    "deg": 227,
    "clouds": 39
  }]
};

const getWeatherData = () => {
  let p = new Promise((resolve) => {
    setTimeout(() => {
      store.updateGlobalState(data);
    }, 1800);
  });
  return p;
};

export {
  getWeatherData
}
