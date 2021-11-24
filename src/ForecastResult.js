import React from "react";

export default function ForecastResult(props) {
  function formatday(time) {
    let date = new Date(time * 1000);

    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    return days[date.getDay()];
  }
  //   console.log(` array is ${props.forecastArray}`);
  //   console.log(`sliced array is ${props.forecastArray.slice(1, 6)}`);
  return (
    <div className="row mt-4 d-flex justify-content-center">
      {props.forecastArray.slice(1, 6).map((forecastDay, index) => {
        return (
          <div key={index} className="col-md-2 m-2 p-2 card ">
            <div className="text-muted">
              {" "}
              <strong>{formatday(forecastDay.dt)}</strong>
            </div>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png`}
                alt={forecastDay.weather[0].description}
              />
            </div>
            <div className="d-flex  maxmin d-flex justify-content-around ">
              <div>
                <div>Max</div>
                <div> {Math.round(forecastDay.temp.max)}</div>
              </div>
              <div>
                <div>Min</div>
                <div> {Math.round(forecastDay.temp.min)}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
