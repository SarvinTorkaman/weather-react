import React, { useState } from "react";
import axios from "axios";

import ForecastResult from "./ForecastResult";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState({});
  const [loaded, setLaoded] = useState("");
  const [forecast, setForecast] = useState([]);

  function timeformat(time) {
    if (time < 10) {
      return "0" + time;
    } else return time;
  }
  function displaytime(time) {
    let date = new Date(time * 1000);
    let hour = date.getHours();
    let mins = date.getMinutes();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return ` ${days[date.getDay()]} ${date.getDate()}, ${timeformat(
      hour
    )}:${timeformat(mins)}`;
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function getForecastArray(response) {
    setForecast(response.data.daily);
    // console.log(forecast);
  }
  function getWeather(response) {
    // console.log(response);

    setResult({
      name: response.data.name,
      temperature: response.data.main.temp,
      country: response.data.sys.country,
      date: response.data.dt,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
    });

    let apiKey = "44a9d77f1f64a6f4ebc731802143f760";
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&appid=${apiKey}&units=metric`;
    setLaoded(true);
    axios.get(apiUrlForecast).then(getForecastArray);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "44a9d77f1f64a6f4ebc731802143f760";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function searchLocation(position) {
    console.log(position);
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
  if (loaded) {
    return (
      <div className="Weather">
        <div className="container">
          {form}

          <div className="result">
            {" "}
            <h2>
              {result.name}, {result.country}
            </h2>
            <h4 className="text-muted">{displaytime(result.date)}</h4>
            <div className="d-sm-flex d-block justify-content-around mt-5 ">
              <div>
                <span className="temperature">
                  {Math.round(result.temperature)}°
                </span>
                <span className="unit">
                  <a href="/">C</a>
                </span>
                <div className="description ">
                  <em>{result.description}</em>{" "}
                </div>
              </div>
              <div className="icon ">
                <img
                  src={result.icon}
                  alt={result.description}
                  width="150"
                  heigh="150"
                />

                <div className=" maxmin d-flex justify-content-around">
                  <div>
                    <div>High</div>
                    <div>{Math.round(result.high)}</div>
                  </div>
                  <div>
                    <div>Low</div>
                    <div>{Math.round(result.low)}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4  mb-4 detail">
              <div className="col-md-4 text-muted">
                Humidity: {result.humidity}%
              </div>
              <div className="col-md-4 text-muted">
                Pressure:{result.pressure} hPa
              </div>
              <div className="col-md-4 text-muted">
                Wind: {Math.round(result.wind * 3.6)} km/h
              </div>
            </div>
            <hr />
            <ForecastResult forecastArray={forecast} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <div className="container">{form}</div>
      </div>
    );
  }
}
