import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";
import Temperature from "./Temperature";

export default function DisplayWeatherResult(props) {
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
            <Temperature temperature={props.data.temperature} />

            <div className="description ">
              <em>{props.data.description}</em>{" "}
            </div>
          </div>
          <div className="icon ">
            <WeatherIcon
              icon={props.data.icon}
              description={props.data.description}
            />

            <div className=" maxmin d-flex justify-content-around">
              <div>
                <div>High</div>
                <div>{Math.round(props.data.high)}</div>
              </div>
              <div>
                <div>Low</div>
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
