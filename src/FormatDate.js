import React from "react";

export default function formatDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let ampm = hours >= 12 ? `pm` : `am`;
  if (hours > 12) {
    hours = `${hours}` - 12;
  }
  let minutes = ("0" + props.date.getMinutes()).slice(-2);

  return `${day}, ${hours}:${minutes} ${ampm}`;
}
