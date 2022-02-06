import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Stephanie Clemann and is{" "}
          <a
            href="https://github.com/clemanntyne/React-weather-app-Final"
            traget="_blank"
          >
            Open Source
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}
