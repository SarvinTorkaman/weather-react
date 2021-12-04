import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";

// import ForecastResult from "./ForecastResult";
export default function DisplayWeatherResult(props) {
  let [temperature, setTemperature] = useState(props.data.temperature);

  let celcius = props.data.temperature;
  //   let [temperature, setTemperature] = useState("");

  // setTemperature(Math.round(props.data.temperature));

  function getFahrenheit(event) {
    event.preventDefault();
    // temperature = Math.round((result.temperature * 9) / 5 + 32);
    setTemperature(Math.round((celcius * 9) / 5 + 32));
    // console.log(temperature);
  }
  function getCelcius(event) {
    event.preventDefault();
    setTemperature(Math.round(props.data.temperature));
    // console.log(temperature);
  }
  return (
    <div className="DisplayWeatherResult">
      <div className="result">
        {" "}
        <h2>
          {props.data.name}, {props.data.country}
        </h2>
        <h4 className="text-muted">
          <FormattedDate date={props.data.date} />
        </h4>
        <div className="d-md-flex d-block justify-content-around mt-5 ">
          <div>
            <span className="temperature">{Math.round(temperature)}°</span>
            <span className="unit">
              <a href="/" onClick={getCelcius}>
                C
              </a>{" "}
              |{" "}
              <a href="/" onClick={getFahrenheit}>
                F
              </a>
            </span>
            <div className="description ">
              <em>{props.data.description}</em>{" "}
            </div>
          </div>
          <div className="icon ">
            <WeatherIcon
              icon={props.data.icon}
              description={props.data.description}
            />
            {/* <img
              src={props.data.icon}
              alt={props.data.description}
              width="150"
              heigh="150"
            /> */}

            <div className=" maxmin d-flex justify-content-around">
              <div>
                <div>Highest</div>
                <div>{Math.round(props.data.high)}</div>
              </div>
              <div>
                <div>Lowest</div>
                <div>{Math.round(props.data.low)}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4  mb-4 detail">
          <div className="col-md-4 text-muted">
            Humidity: {props.data.humidity}%
          </div>
          <div className="col-md-4 text-muted">
            Pressure:{props.data.pressure} hPa
          </div>
          <div className="col-md-4 text-muted">
            Wind: {Math.round(props.data.wind * 3.6)} km/h
          </div>
        </div>
      </div>
    </div>
  );
}
