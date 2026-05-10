import {
  FaSun
} from "react-icons/fa";

import {
  weatherData
} from "../data/weatherData";

import "../styles/weather.unique.css";

const WeatherWidget = () => {

  return (

    <div className="risce-weather-card">

      <div className="risce-weather-left">

        <FaSun className="risce-weather-icon" />

        <div>
          <h2>
            {weatherData.condition}
          </h2>

          <p>
            {weatherData.temperature}
          </p>
        </div>

      </div>

      <div className="risce-weather-right">

        <p>
          Humidity:
          {weatherData.humidity}
        </p>

        <p>
          Wind:
          {weatherData.wind}
        </p>

        <p className="risce-weather-alert">
          {weatherData.alert}
        </p>

      </div>

    </div>
  );
};

export default WeatherWidget;