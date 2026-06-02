// import { FaSun } from "react-icons/fa";

import "../styles/weather.unique.css";

const WeatherWidget = ({ weather }) => {

  return (

    <div className="risce-weather-card">

      <div className="risce-weather-left">

        {/* <FaSun className="risce-weather-icon" /> */}

        <div>

          <h2>{weather.condition}</h2>

          <p>{weather.temperature}</p>

        </div>

      </div>

      <div className="risce-weather-right">

        <p>
          Humidity:
          {weather.humidity}
        </p>

        <p>
          Wind:
          {weather.wind}
        </p>

        <p className="risce-weather-alert">
          {weather.alert}
        </p>

      </div>

    </div>
  );
};

export default WeatherWidget;