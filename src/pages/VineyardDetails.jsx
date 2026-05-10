import WeekTabs from "../components/WeekTabs";

import WeatherWidget from "../components/WeatherWidget";

import VineyardHoverLayer from "../components/VinyardHoverLayer";

import "../styles/vineyard.unique.css";

const VineyardDetails = () => {

  return (

    <div className="risce-vineyard-page">

      {/* TITLE */}
      <h1 className="risce-vineyard-title">
        Sina's Vineyard Monitoring
      </h1>

      {/* TABS */}
      <WeekTabs />

      {/* WEATHER */}
      <WeatherWidget />

      {/* SATELLITE */}
      <VineyardHoverLayer />

    </div>
  );
};

export default VineyardDetails;