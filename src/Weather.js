import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="m-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="City Name..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary w-50">
              Search
            </button>
          </div>
        </div>
      </form>
      <div>
        <ul>
          <li>City Name</li>
          <li>Last Updated: (time)</li>
          <li>Weather Description</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <span>Weather Icon </span>
            <span>Temp</span>
            <span>C° | F°</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Clouds: %</li>
              <li>Wind: mph</li>
              <li>Humidity: %</li>
            </ul>
          </div>
        </div>
        <div className="row">
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
}
