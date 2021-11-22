import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
export default function Weather(props) {
  function handleResponse(response) {
    console.log(response);
    alert(
      `the weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}C`
    );
  }
  let apiKey = "44a9d77f1f64a6f4ebc731802143f760";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000} //3 secs
      />
    </div>
  );
}
