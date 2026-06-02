import { useState } from "react";
import WeekTabs from "../components/WeekTabs";
import WeatherWidget from "../components/WeatherWidget";
import VineyardHoverLayer from "../components/VinyardHoverLayer";
import { vineyardWeeklyData } from "../data/weatherData";
import "../styles/vineyard.unique.css";

const VineyardDetails = () => {
  const [activeWeek, setActiveWeek] = useState(0);

  const currentWeek = vineyardWeeklyData[activeWeek];
  const weekLabels = vineyardWeeklyData.map((w) => w.week);

  return (
    <div className="risce-vineyard-page">
      <h1 className="risce-vineyard-title">
        Sina's Vineyard Monitoring
      </h1>

      <WeekTabs
        activeWeek={activeWeek}
        setActiveWeek={setActiveWeek}
        weeks={weekLabels}
      />

      <WeatherWidget weather={currentWeek.weather} />

      <VineyardHoverLayer
        satelliteImage={currentWeek.image}
        affectedPlants={currentWeek.affectedPlants}
      />
    </div>
  );
};

export default VineyardDetails;