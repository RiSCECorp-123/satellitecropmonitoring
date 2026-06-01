  // src/components/VineyardHoverLayer.jsx

  import { useState } from "react";

  import "../styles/vineyard.unique.css";

  import VineyardImg from "../assets/V.png";
  // import Healthy from "../assets/Vine.png";
  import Unhealthy from "../assets/unhealthy.png";

 const affectedPlants = [
  { id: 1, x: "34%", y: "8%" },
  { id: 2, x: "37%", y: "9%" },
  { id: 3, x: "40%", y: "11%" },

  { id: 4, x: "64%", y: "6%" },
  { id: 5, x: "65%", y: "8%" },
  { id: 6, x: "66%", y: "10%" },

  { id: 7, x: "20%", y: "21%" },
  { id: 8, x: "38%", y: "21%" },

  { id: 9, x: "40%", y: "30%" },
  { id: 10, x: "43%", y: "33%" },

  { id: 11, x: "60%", y: "29%" },
  { id: 12, x: "66%", y: "32%" },

  { id: 13, x: "6%", y: "40%" },
  { id: 14, x: "5%", y: "44%" },
  { id: 15, x: "4%", y: "48%" },

  { id: 16, x: "42%", y: "40%" },
  { id: 17, x: "43%", y: "43%" },

  { id: 18, x: "49%", y: "39%" },

  { id: 19, x: "52%", y: "52%" },

  { id: 20, x: "12%", y: "63%" },
  { id: 21, x: "14%", y: "65%" },
  { id: 22, x: "16%", y: "67%" },

  { id: 23, x: "18%", y: "78%" },
  { id: 24, x: "28%", y: "79%" },

  { id: 25, x: "59%", y: "90%" },
  { id: 26, x: "62%", y: "89%" },

  { id: 27, x: "28%", y: "94%" },
  { id: 28, x: "40%", y: "96%" }
];

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

  const [selectedDot, setSelectedDot] =
    useState(null);

  const [cardPosition, setCardPosition] =
    useState({
      x: 0,
      y: 0,
    });

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
      HEALTH DETECTION
    ========================= */

  

    /* =========================
      HOVER
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
        <div className="risce-vineyard-image-wrapper">

            <img
    src={VineyardImg}
    alt="satellite"
    className="risce-vineyard-main-image"
  />
  {affectedPlants.map((dot) => (

  <div
    key={dot.id}
    className="risce-click-hotspot"

    style={{
      left: dot.x,
      top: dot.y,
    }}

    onClick={() => {

      setSelectedProblemPlant(false);

     setSelectedProblemPlant(false);

setShowSuggestions(false);

setSelectedDot(dot);

setCardPosition({
  x: dot.x,
  y: dot.y,
});
    }}
  />

))}

            {selectedDot && (

    <div
      className="risce-plant-preview-card"

      style={{
        left: cardPosition.x,
        top: cardPosition.y,
      }}

      onClick={() => {
        setSelectedProblemPlant(true);
      }}
    >

      <button
        className="risce-unlock-button"

        onClick={(e) => {

  e.stopPropagation();

  setSelectedDot(null);

  setSelectedProblemPlant(false);

  setShowSuggestions(false);

  setShowChemicalPopup(false);

  setShowNaturalPopup(false);
}}
      >
        ✕
      </button>

      <img
        src={Unhealthy}
        alt="plant"
        className="risce-plant-preview-image"
      />

      <p>Diseased Vineyard</p>

      <div className="risce-click-hint">

        Click To Inspect

      </div>

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