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
      "Experienced vine growers across Europe share one truth — the vine always tells you when it's ready. Seasonal pruning isn't just technique; it's a conversation between the grower and the plant, refined over generations of careful observation.",
    source: "BBC | Vine Care Series",
    icon: "✂️",
  },
  {
    id: 2,
    tag: "Soil Health",
    title: "Feeding the Ground Beneath the Vine",
    excerpt:
      "Healthy grapes begin long before flowering. Growers are returning to regenerative soil practices — cover crops, reduced tillage, and organic compost — to rebuild the microbial life that feeds roots at their deepest level.",
    source: "BBC | Vine Care Series",
    icon: "🌱",
  },
  {
    id: 3,
    tag: "Water Management",
    title: "Every Drop Counts in a Changing Climate",
    excerpt:
      "As summers grow drier and unpredictable, vineyard families are rethinking irrigation — using drip systems, monitoring soil moisture, and harvesting rainwater. The vine is resilient, but only if the farmer is patient and precise.",
    source: "BBC | Vine Care Series",
    icon: "💧",
  },
  {
    id: 4,
    tag: "Generational Knowledge",
    title: "What Grandmothers Knew About Grapes",
    excerpt:
      "In many family-run vineyards, the oldest knowledge is proving to be the most valuable. Lunar planting calendars, handpicked harvests, and memory of which rows performed best in drought years — wisdom no algorithm can replace.",
    source: "BBC | Vine Care Series",
    icon: "🍇",
  },
];

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
    <>

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

    <section className="vcs-section">
      {/* HEADER */}
      <div className="vcs-header">
        <span className="vcs-eyebrow">From the Field</span>
        <h2 className="vcs-heading">Vine Care Stories</h2>
        <p className="vcs-subheading">
          Real stories from growers, farmers, and families who tend the vine —
          season after season, root to fruit.
        </p>
        
      </div>
 
      {/* STORY CARDS GRID */}
      <div className="vcs-grid">
        {stories.map((story) => (
          <div className="vcs-card" key={story.id}>
            <div className="vcs-card-top">
              <span className="vcs-icon">{story.icon}</span>
              <span className="vcs-tag">{story.tag}</span>
            </div>
            <h3 className="vcs-card-title">{story.title}</h3>
            <p className="vcs-card-excerpt">{story.excerpt}</p>
            <div className="vcs-card-footer">
              <span className="vcs-card-source">{story.source}</span>
              <button className="vcs-read-btn">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default VineyardHoverLayer;