import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function ForecastEachDay(props) {
  function formatday(time) {
    let date = new Date(time * 1000);

    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    return days[date.getDay()];
  }

  function round(number) {
    return Math.round(number);
  }

  return (
    <div>
      <div className="text-muted">
        {" "}
        <strong>{formatday(props.forecastDay.dt)}</strong>
      </div>
      <div>
        <WeatherIcon
          icon={props.forecastDay.weather[0].icon}
          description={props.forecastDay.weather[0].description}
        />
      </div>
      <div className="d-flex  maxmin d-flex justify-content-around ">
        <div>
          <div> {round(props.forecastDay.temp.max)}°</div>
        </div>
        <div>
          <div className="text-muted">
            {" "}
            {round(props.forecastDay.temp.min)}°
          </div>
        </div>
      </div>
    </div>
  );
}
