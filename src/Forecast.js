import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {}

  let apiKey = "44a9d77f1f64a6f4ebc731802143f760";
  let apiUrl = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${props.city}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return <div>f</div>;
}
