import React, { useState } from "react";
import axios from "axios";

import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLaoded] = useState("");
  const [result, setResult] = useState({});

  function getCity(event) {
    setCity(event.target.value);
  }
  function handleResponse(response) {
    console.log(response);
    setLaoded(true);
    setResult({
      name: response.data.name,
      temperature: response.data.main.temp,
      country: response.data.sys.country,
      date: response.data.sys.dt,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "44a9d77f1f64a6f4ebc731802143f760";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
          <input className="form-control" type="button" value="Current" />
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
            <h4 className="text-muted">Monday 29 April {result.date}</h4>
            <div className="d-flex justify-content-around mt-5 ">
              <div>
                <span className="temperature">
                  {Math.round(result.temperature)}°
                </span>
                <span className="unit">
                  <a href="/">C</a> | <a href="/">F</a>
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

                <div className=" maxmin d-flex justify-content-between">
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
            <div className="row mt-5  mb-5 detail">
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
            <div>
              <Forecast city={city} />
            </div>
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
