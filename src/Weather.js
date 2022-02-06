import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [ready, setReady] = useState(false);

  function getWeather(response) {
    setReady(true);
    setWeather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      clouds: response.data.clouds.all,
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "88724523008dc9e1be18f6eb6a959b67";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form className="m-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="City Name..."
            className="form-control"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-primary w-50">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  if (ready) {
    return (
      <div className="Weather">
        <div> {form} </div>
        <div>
          <ul className="m-3">
            <li className="fs-4 fw-bold">{weather.city}</li>
            <li>
              Last Updated: <FormatDate date={weather.date} />
            </li>
            <li className="text-capitalize">{weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-6 ms-3">
              <span>
                <img src={weather.icon} alt="weather icon" className="icon" />
              </span>
              <span className="temperature">{weather.temperature}</span>
              <span className="units">C° | F°</span>
            </div>
            <div className="col-3">
              <ul>
                <li>Clouds: {weather.clouds}%</li>
                <li>Wind: {weather.wind}mph</li>
                <li>Humidity: {weather.humidity}%</li>
              </ul>
            </div>
          </div>
          <div className="row text-center mt-3 mb-3">
            <div className="col-2">
              <ul>
                <li>Mon</li>
                <li>weather icon</li>
                <li>high</li>
                <li>low</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li>Mon</li>
                <li>weather icon</li>
                <li>high</li>
                <li>low</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li>Mon</li>
                <li>weather icon</li>
                <li>high</li>
                <li>low</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li>Mon</li>
                <li>weather icon</li>
                <li>high</li>
                <li>low</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li>Mon</li>
                <li>weather icon</li>
                <li>high</li>
                <li>low</li>
              </ul>
            </div>
            <div className="col-2">
              <ul>
                <li>Mon</li>
                <li>weather icon</li>
                <li>high</li>
                <li>low</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "88724523008dc9e1be18f6eb6a959b67";
    let city = "San Francisco";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);

    return "Loading...";
  }
}
