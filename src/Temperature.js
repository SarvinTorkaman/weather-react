import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("Celcius");
  console.log(props.temperature);

  function getFahrenheit(event) {
    event.preventDefault();

    setUnit("Fahrenheit");
  }

  function getCelcius(event) {
    event.preventDefault();
    setUnit("Celcius");
  }

  if (unit === "Celcius") {
    return (
      <div>
        <span className="temperature">{props.temperature}°</span>
        <span className="unit">
          C |{" "}
          <a href="/" onClick={getFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">
          {Math.round((props.temperature * 9) / 5 + 32)}°
        </span>
        <span className="unit">
          <a href="/" onClick={getCelcius}>
            C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
