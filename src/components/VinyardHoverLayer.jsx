// src/components/VineyardHoverLayer.jsx

import { useState } from "react";

import "../styles/vineyard.unique.css";

import VineyardImg from "../assets/Vineyard.jpg";
import Healthy from "../assets/Vine.png";
import Unhealthy from "../assets/unhealthy.png";

const VineyardHoverLayer = () => {

  /* HOVERED PLANT */
  const [hoveredPlant, setHoveredPlant] =
    useState(null);

  /* CARD POSITION */
  const [cardPosition, setCardPosition] =
    useState({
      x: 0,
      y: 0
    });

  /* RIGHT SIDE PANEL */
  const [selectedProblemPlant, setSelectedProblemPlant] =
    useState(false);

  /* USER IMAGE */
  const [uploadedImage, setUploadedImage] =
    useState(null);

  /* SUGGESTION */
  const [showSuggestions, setShowSuggestions] =
    useState(false);

  /* DETECT HEALTH */
  const detectPlantHealth = (
    mouseX,
    mouseY,
    width,
    height
  ) => {

    const horizontalRatio =
      mouseX / width;

    const verticalRatio =
      mouseY / height;

    /* HEALTHY AREA */
    if (
      horizontalRatio < 0.45 &&
      verticalRatio < 0.55
    ) {
      return 1;
    }

    /* UNHEALTHY AREA */
    return 0;
  };

  /* HOVER IMAGE */
  const handleMouseMove = (e) => {

    const rect =
      e.currentTarget.getBoundingClientRect();

    const mouseX =
      e.clientX - rect.left;

    const mouseY =
      e.clientY - rect.top;

    const result =
      detectPlantHealth(
        mouseX,
        mouseY,
        rect.width,
        rect.height
      );

    setHoveredPlant(result);

    setCardPosition({
      x: mouseX,
      y: mouseY
    });
  };

  /* REMOVE HOVER */
  const handleMouseLeave = () => {

    setHoveredPlant(null);
  };

  /* CLICK UNHEALTHY */
  const handleCardClick = () => {

    if (hoveredPlant === 0) {

      setSelectedProblemPlant(true);
    }
  };

  /* UPLOAD IMAGE */
  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (file) {

      const imageUrl =
        URL.createObjectURL(file);

      setUploadedImage(imageUrl);
    }
  };

  return (

    <div className="risce-vineyard-main-layout">

      {/* LEFT */}
      <div className="risce-vineyard-image-wrapper">

        <img
          src={VineyardImg}

          alt="satellite"

          className="risce-vineyard-main-image"

          onMouseMove={handleMouseMove}

          onMouseLeave={handleMouseLeave}
        />

        {/* FLOATING CARD */}
        {hoveredPlant !== null && (

          <div
            className="risce-plant-preview-card"

            style={{
              top: cardPosition.y + 20,
              left: cardPosition.x + 20
            }}

            onClick={handleCardClick}
          >

            <img
              src={
                hoveredPlant === 1
                  ? Healthy
                  : Unhealthy
              }

              alt="plant"

              className="risce-plant-preview-image"
            />

            <p>

              {hoveredPlant === 1
                ? "Healthy Vineyard"
                : "Dying Vineyard"}

            </p>

            {/* CLICK TEXT */}
            {hoveredPlant === 0 && (

              <div className="risce-click-text">

                Click to Inspect

              </div>
            )}

          </div>
        )}

      </div>

      {/* RIGHT PANEL */}
      {selectedProblemPlant && (

        <div className="risce-right-problem-panel">

          <h2 className="risce-problem-heading">

            Vineyard Analysis

          </h2>

          <img
            src={
              uploadedImage
                ? uploadedImage
                : Unhealthy
            }

            alt="problem"

            className="risce-problem-image"
          />

          {/* UPLOAD */}
          <label className="risce-upload-button">

            Upload Photos of Plant

            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageUpload}
            />

          </label>

          {/* BUTTON */}
          <button
            className="risce-check-button"

            onClick={() => {
              setShowSuggestions(true);
            }}
          >

            Check for Problems

          </button>

          {/* SUGGESTIONS */}
          {showSuggestions && (

            <div className="risce-suggestion-box">

              <h3>
                Possible Issues
              </h3>

              <ul>

                <li>
                  Pest Attack
                </li>

                <li>
                  Various Grasshoppers
                </li>

                <li>
                  Weevils
                </li>

                <li>
                  Beetles
                </li>

                <li>
                  Thrips
                </li>

                <li>
                  Water Related Issues
                </li>

                <li>
                  Nutrient Deficiency
                </li>

              </ul>

              <h3>
                General Farmer's Approach
              </h3>

              <a
                href="https://www.fao.org"
                target="_blank"
                rel="noreferrer"

                className="risce-farmer-link"
              >

                Read Suggested Guidelines

              </a>

            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default VineyardHoverLayer;