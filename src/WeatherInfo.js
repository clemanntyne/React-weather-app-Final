import React from "react";
import FormatDate from "./FormatDate";

import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <ul className="m-3">
        <li className="fs-4 fw-bold">{props.weather.city}</li>
        <li>
          Last Updated: <FormatDate date={props.weather.date} />
        </li>
        <li className="text-capitalize">{props.weather.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 ms-3">
          <span>
            <img src={props.weather.icon} alt="weather icon" className="icon" />
          </span>
          <span className="temperature">{props.weather.temperature}</span>
          <span className="units">C° | F°</span>
        </div>
        <div className="col-3">
          <ul>
            <li>Clouds: {props.weather.clouds}%</li>
            <li>Wind: {props.weather.wind}mph</li>
            <li>Humidity: {props.weather.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
