import React, { useState, useEffect } from "react";

import ForecastEachDay from "./ForecastEachDay.js";
import axios from "axios";

export default function ForecastResult(props) {
  const [loaded, getLoaded] = useState(false);
  const [forecast, setForecast] = useState([]);

  function getForecastArray(response) {
    setForecast(response.data.daily);
    getLoaded(true);
    // console.log(forecast);
  }

  //   console.log(` array is ${props.forecastArray}`);
  //   console.log(`sliced array is ${props.forecastArray.slice(1, 6)}`);

  useEffect(() => {
    getLoaded(false);
  }, [props.lon, props.lat]);

  if (loaded === true) {
    return (
      <div className="row mt-4 d-flex justify-content-center">
        {forecast.map((forecastDay, index) => {
          if (index < 5) {
            return (
              <div key={index} className="col-md-2 m-2 p-2 card ">
                <ForecastEachDay forecastDay={forecastDay} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "44a9d77f1f64a6f4ebc731802143f760";
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrlForecast).then(getForecastArray);

    return null;
  }
}
