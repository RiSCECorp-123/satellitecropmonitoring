// src/pages/Dashboard.jsx

import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { LanguageContext } from "../context/LanguageContext";

import GoogleMapView from "../components/GoogleMapView";

import "../styles/dashboard.unique.css";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { t } = useContext(LanguageContext);

  const [selectedField, setSelectedField] = useState(null);

  return (
    <div className="risce-dashboard-container">

      {/* HEADER */}
      <div className="risce-dashboard-header">

        <h1 className="risce-dashboard-title">
          {user ? `${user.name}'s Farm` : t.dashboard}
        </h1>
        <h3>Sina's Farm</h3>

      </div>

      {/* MAP + SIDE PANEL */}
      <div className="risce-dashboard-flex">

        {/* LEFT MAP */}
        <div className="risce-dashboard-map-section">

          <div className="risce-dashboard-card">

            <div className="risce-map-wrapper">

              <GoogleMapView
                setSelectedField={setSelectedField}
              />

            </div>

          </div>

          {/* FIELD DESCRIPTION */}
          <div className="risce-field-description-box">

            <h2 className="risce-field-description-title">
              {t.fieldDescriptions}
            </h2>

            {/* WHEAT */}
            <div className="risce-field-item">
              <div className="risce-field-color risce-wheat-color"></div>
              <span>{t.wheatField}</span>
            </div>

            {/* CORN */}
            <div className="risce-field-item">
              <div className="risce-field-color risce-corn-color"></div>
              <span>{t.cornField}</span>
            </div>

            {/* VINEYARD */}
            <div className="risce-field-item">
              <div className="risce-field-color risce-vineyard-color"></div>
              <span>{t.vineyardField}</span>
            </div>

            {/* BARREL */}
            <div className="risce-field-item">
              <div className="risce-field-color risce-barrel-color"></div>
              <span>{t.barrelLand}</span>
            </div>

          </div>

        </div>

        {/* RIGHT PREVIEW PANEL */}
        <div className="risce-dashboard-preview-section">

          {selectedField ? (
            <div className="risce-preview-card">

              <img
                src={selectedField.image}
                alt="preview"
                className="risce-preview-image"
              />

              <div className="risce-preview-content">

                <h2 className="risce-preview-title">
                  {selectedField.title}
                </h2>

                <p className="risce-preview-description">
                  {selectedField.description}
                </p>

              </div>

            </div>
          ) : (
            <div className="risce-preview-empty">
              
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;
// dash board should be connected to DB