import React, { useState } from "react";
import axios from "axios";
import DisplayWeatherResult from "./DisplayWeatherResult";

import ForecastResult from "./ForecastResult";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);

  const [result, setResult] = useState({ loaded: false });

  // const [forecast, setForecast] = useState([]);

  function getCity(event) {
    setCity(event.target.value);
  }

  // function getForecastArray(response) {
  //   setForecast(response.data.daily);
  //   // console.log(forecast);
  // }

  function getWeather(response) {
    // console.log(response);

    setResult({
      loaded: true,
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      country: response.data.sys.country,
      date: response.data.dt,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      icon: response.data.weather[0].icon,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });

    // let apiKey = "44a9d77f1f64a6f4ebc731802143f760";
    // let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&appid=${apiKey}&units=metric`;

    // axios.get(apiUrlForecast).then(getForecastArray);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "44a9d77f1f64a6f4ebc731802143f760";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }
  function searchLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "44a9d77f1f64a6f4ebc731802143f760";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }
  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  let form = (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row">
        {" "}
        <div className="col-md-8">
          <input
            className="form-control mt-2"
            type="search"
            placeholder="Type a city ..."
            autoFocus={true}
            onChange={getCity}
          />
        </div>
        <div className="col-md-2">
          <input className="form-control mt-2" type="submit" value="Search" />
        </div>
        <div className="col-md-2 mt-2">
          <input
            className="form-control"
            type="button"
            value="Current"
            onClick={getLocation}
          />
        </div>{" "}
      </div>
    </form>
  );
  if (result.loaded) {
    return (
      <div className="Weather">
        <div className="container">
          {form}

          <DisplayWeatherResult data={result} />
          <hr />
          <ForecastResult lon={result.lon} lat={result.lat} />
        </div>
      </div>
    );
  } else {
    search();
    return <div className="Weather">Loading</div>;
  }
}
