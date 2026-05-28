// src/components/VineyardHoverLayer.jsx

import { useState } from "react";

import "../styles/vineyard.unique.css";

import VineyardImg from "../assets/Vineyard.jpg";
import Healthy from "../assets/Vine.png";
import Unhealthy from "../assets/unhealthy.png";

const stories = [
  {
    id: 1,
    tag: "Pruning & Growth",
    title: "The Art of Knowing When to Cut",
    excerpt:
      "Experienced vine growers across Europe share one truth — the vine always tells you when it's ready.",
    source: "BBC | Vine Care Series",
    icon: "✂️",
  },

  {
    id: 2,
    tag: "Soil Health",
    title: "Feeding the Ground Beneath the Vine",
    excerpt:
      "Healthy grapes begin long before flowering. Growers are returning to regenerative soil practices.",
    source: "BBC | Vine Care Series",
    icon: "🌱",
  },

  {
    id: 3,
    tag: "Water Management",
    title: "Every Drop Counts in a Changing Climate",
    excerpt:
      "As summers grow drier and unpredictable, vineyard families are rethinking irrigation systems.",
    source: "BBC | Vine Care Series",
    icon: "💧",
  },

  {
    id: 4,
    tag: "Generational Knowledge",
    title: "What Grandmothers Knew About Grapes",
    excerpt:
      "Traditional vineyard knowledge still guides modern farming across Europe.",
    source: "BBC | Vine Care Series",
    icon: "🍇",
  },
];

const VineyardHoverLayer = () => {

  const [hoveredPlant, setHoveredPlant] =
    useState(null);

  const [cardPosition, setCardPosition] =
    useState({
      x: 0,
      y: 0,
    });

  const [lockedCard, setLockedCard] =
    useState(false);

  const [selectedProblemPlant, setSelectedProblemPlant] =
    useState(false);

  const [uploadedImage, setUploadedImage] =
    useState(null);

  const [showSuggestions, setShowSuggestions] =
    useState(false);

  const [showChemicalPopup, setShowChemicalPopup] =
    useState(false);

  const [showNaturalPopup, setShowNaturalPopup] =
    useState(false);

  /* =========================
     FIELD DETECTION
  ========================= */

  const isInsideField = (
    horizontalRatio,
    verticalRatio
  ) => {

    /*
      Ignore black empty regions.
      Only hover inside vineyard areas.
    */

    if (
      horizontalRatio < 0.08 ||
      horizontalRatio > 0.94 ||
      verticalRatio < 0.08 ||
      verticalRatio > 0.92
    ) {
      return false;
    }

    return true;
  };

  /* =========================
     HEALTH DETECTION
  ========================= */

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

    /* BLACK EMPTY SPACE */
    if (
      !isInsideField(
        horizontalRatio,
        verticalRatio
      )
    ) {
      return null;
    }

    /* HEALTHY REGION */
    if (
      horizontalRatio < 0.45 &&
      verticalRatio < 0.55
    ) {
      return 1;
    }

    /* DISEASED REGION */
    return 0;
  };

  /* =========================
     HOVER
  ========================= */

  const handleMouseMove = (e) => {

    const rect =
      e.currentTarget.getBoundingClientRect();

    const mouseX =
      e.clientX - rect.left;

    const mouseY =
      e.clientY - rect.top;

    /* LOCK POSITION */
    if (!lockedCard) {

      setCardPosition({
        x: mouseX,
        y: mouseY,
      });
    }

    const result =
      detectPlantHealth(
        mouseX,
        mouseY,
        rect.width,
        rect.height
      );

    /* OUTSIDE FIELD */
    if (result === null) {

      if (!lockedCard) {

        setHoveredPlant(null);
      }

      return;
    }

    /* KEEP DISEASE CARD LOCKED */
    if (lockedCard) {
      return;
    }

    setHoveredPlant(result);

    /* LOCK ONLY FOR DISEASE */
    if (result === 0) {

      setLockedCard(true);
    }
  };

  /* =========================
     RESET
  ========================= */

  const resetHover = () => {

    if (!lockedCard) {

      setHoveredPlant(null);
    }
  };

  /* =========================
     REMOVE LOCK
  ========================= */

  const unlockHover = (e) => {

    e.stopPropagation();

    setLockedCard(false);

    setHoveredPlant(null);
  };

  /* =========================
     CLICK CARD
  ========================= */

  const handleCardClick = () => {

    if (hoveredPlant === 0) {

      setSelectedProblemPlant(true);
    }
  };

  /* =========================
     IMAGE UPLOAD
  ========================= */

  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (file) {

      const imageUrl =
        URL.createObjectURL(file);

      setUploadedImage(imageUrl);
    }
  };

  return (
    <>

      <div className="risce-vineyard-flex-layout">

        {/* LEFT */}
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
                left: cardPosition.x + 20,
              }}

              onClick={handleCardClick}
            >

              {/* CLOSE LOCK */}
              {lockedCard && (

                <button
                  className="risce-unlock-button"
                  onClick={unlockHover}
                >

                  ✕

                </button>
              )}

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

            <label className="risce-upload-button">

              Upload Photos of Plant

              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />

            </label>

            <button
              className="risce-check-button"

              onClick={() => {
                setShowSuggestions(true);
              }}
            >

              Check for problems

            </button>

            {showSuggestions && (

              <div className="risce-result-box">

                <h3>
                  Possible Issues
                </h3>

                <ul>

                  <li>
                    Pest Attack,
                    Grasshoppers or Weevils
                    (Certainty - 60%)
                  </li>

                </ul>

                <h3 className="risce-suggestion-heading">
                  Suggestions
                </h3>

                <div className="risce-solution-button-container">

                  <button
                    className="risce-solution-button"

                    onClick={() => {
                      setShowChemicalPopup(true);
                    }}
                  >

                    Chemical Solution

                  </button>

                  <button
                    className="risce-solution-button"

                    onClick={() => {
                      setShowNaturalPopup(true);
                    }}
                  >

                    Natural Solution

                  </button>

                </div>

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

      {/* CHEMICAL POPUP */}
      {showChemicalPopup && (

        <div className="risce-popup-overlay">

          <div className="risce-popup-box">

            <button
              className="risce-popup-close"

              onClick={() => {
                setShowChemicalPopup(false);
              }}
            >

              ✕

            </button>

            <h2>
              Chemical Solutions
            </h2>

            <ul>

              <li>
                <strong>Nexa Lotte</strong> :
                Universal insect spray commonly
                used in Germany.
              </li>

              <li>
                <strong>Celaflor</strong> :
                Specialized pest-control spray
                for vineyards and crops.
              </li>

              <li>
                <strong>Ink Home Protect 171</strong> :
                Water-based pyrethrin spray.
              </li>

            </ul>

          </div>

        </div>
      )}

      {/* NATURAL POPUP */}
      {showNaturalPopup && (

        <div className="risce-popup-overlay">

          <div className="risce-popup-box">

            <button
              className="risce-popup-close"

              onClick={() => {
                setShowNaturalPopup(false);
              }}
            >

              ✕

            </button>

            <h2>
              Natural Solutions
            </h2>

            <ul>

              <li>
                Cut and remove affected areas.
              </li>

              <li>
                Apply neem oil spray weekly.
              </li>

              <li>
                Maintain airflow between plants.
              </li>

              <li>
                Avoid excessive irrigation.
              </li>

            </ul>

          </div>

        </div>
      )}

      {/* STORIES */}
      <section className="vcs-section">

        <div className="vcs-header">

          <span className="vcs-eyebrow">
            From the Field
          </span>

          <h2 className="vcs-heading">
            Vine Care Stories
          </h2>

          <p className="vcs-subheading">

            Real stories from growers,
            farmers, and families who tend
            the vine season after season.

          </p>

        </div>

        <div className="vcs-grid">

          {stories.map((story) => (

            <div
              className="vcs-card"
              key={story.id}
            >

              <div className="vcs-card-top">

                <span className="vcs-icon">
                  {story.icon}
                </span>

                <span className="vcs-tag">
                  {story.tag}
                </span>

              </div>

              <h3 className="vcs-card-title">
                {story.title}
              </h3>

              <p className="vcs-card-excerpt">
                {story.excerpt}
              </p>

              <div className="vcs-card-footer">

                <span className="vcs-card-source">
                  {story.source}
                </span>

                <button className="vcs-read-btn">

                  Read More →

                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

    </>
  );
};

export default VineyardHoverLayer;