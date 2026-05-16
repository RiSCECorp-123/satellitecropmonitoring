// src/components/VineyardHoverLayer.jsx

import { useState } from "react";

import "../styles/vineyard.unique.css";

import VineyardImg from "../assets/Vineyard.jpg";
import Healthy from "../assets/Vine.png";
import Unhealthy from "../assets/unhealthy.png";

const VineyardHoverLayer = () => {

  /* HOVER STATUS */
  const [hoveredPlant, setHoveredPlant] =
    useState(null);

  /* CARD POSITION */
  const [cardPosition, setCardPosition] =
    useState({
      x: 0,
      y: 0
    });

  /* LOCK CARD */
  const [lockedCard, setLockedCard] =
    useState(false);

  /* RIGHT ANALYSIS PANEL */
  const [selectedProblemPlant, setSelectedProblemPlant] =
    useState(false);

  /* USER IMAGE */
  const [uploadedImage, setUploadedImage] =
    useState(null);

  /* SUGGESTIONS */
  const [showSuggestions, setShowSuggestions] =
    useState(false);

  /* HEALTH DETECTION */
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

    /* HEALTHY REGION */
    if (
      horizontalRatio < 0.45 &&
      verticalRatio < 0.55
    ) {
      return 1;
    }

    /* UNHEALTHY REGION */
    return 0;
  };

  /* HOVER IMAGE */
  const handleMouseMove = (e) => {

    /* DO NOT MOVE CARD */
    if (lockedCard) return;

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

    /* LOCK IF UNHEALTHY */
    if (result === 0) {
      setLockedCard(true);
    }
  };

  /* RESET */
  const resetHover = () => {

    setHoveredPlant(null);

    setLockedCard(false);
  };

  /* CLICK CARD */
  const handleCardClick = () => {

    if (hoveredPlant === 0) {

      setSelectedProblemPlant(true);
    }
  };

  /* IMAGE UPLOAD */
  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (file) {

      const imageUrl =
        URL.createObjectURL(file);

      setUploadedImage(imageUrl);
    }
  };

  return (

    <div className="risce-vineyard-flex-layout">

      {/* LEFT SATELLITE */}
      <div
        className="risce-vineyard-image-wrapper"

        onMouseLeave={resetHover}
      >

        <img
          src={VineyardImg}

          alt="satellite"

          className="risce-vineyard-main-image"

          onMouseMove={handleMouseMove}
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
                : "Diseased Vineyard"}

            </p>

            {hoveredPlant === 0 && (

              <div className="risce-click-hint">

                Click To Inspect

              </div>
            )}

          </div>
        )}

      </div>

      {/* RIGHT PANEL */}
      {selectedProblemPlant && (

        <div className="risce-analysis-panel">

          <h2 className="risce-analysis-heading">

            Vineyard Disease Analysis

          </h2>

          <img
            src={
              uploadedImage
                ? uploadedImage
                : Unhealthy
            }

            alt="analysis"

            className="risce-analysis-image"
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

          {/* CHECK */}
          <button
            className="risce-check-button"

            onClick={() => {
              setShowSuggestions(true);
            }}
          >

            Check for problems

          </button>

          {/* RESULTS */}
          {showSuggestions && (

            <div className="risce-result-box">

              <h3>
                Possible Issues
              </h3>

              <ul>

                <li>
                  Pest Attack ,  Grasshoppers or Weevils (Centainity-60%)
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

                Read Guidelines

              </a>

            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default VineyardHoverLayer;