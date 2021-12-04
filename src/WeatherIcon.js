import React from "react";
import Icons from "./WeatherIcon/index.js";

export default function WeatherIcon(props) {
  let element = props.icon;

  for (let i in Icons) {
    console.log(`element of Icons is ${i}=${Icons[i]}`);
  }

  console.log(`Icons is ${Icons}`);

  return <img src={Icons[element]} alt={props.description} width={100} />;
}
