import React from "react";
import Icons from "./WeatherIcon/index.js";

export default function WeatherIcon(props) {
  let element = props.icon;

  return <img src={Icons[element]} alt={props.description} width={100} />;
}
