import React from "react";

export default function FormattedDate(props) {
  function timeformat(time) {
    if (time < 10) {
      return "0" + time;
    } else return time;
  }
  function displayTime(time) {
    let date = new Date(time * 1000);
    let hour = date.getHours();
    let mins = date.getMinutes();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return ` ${days[date.getDay()]}, ${
      month[date.getMonth()]
    } ${date.getDate()}, ${timeformat(hour)}:${timeformat(mins)}`;
  }
  return <div>{displayTime(props.date)}</div>;
}
