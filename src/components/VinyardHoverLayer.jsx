import { useState } from "react";
import "../styles/vineyard.unique.css";
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

const VineyardHoverLayer = ({ satelliteImage, affectedPlants = [] }) => {
  const [selectedDot, setSelectedDot] = useState(null);
  const [selectedProblemPlant, setSelectedProblemPlant] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showChemicalPopup, setShowChemicalPopup] = useState(false);
  const [showNaturalPopup, setShowNaturalPopup] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [chatDot, setChatDot] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const resetSelection = () => {
    setSelectedDot(null);
    setSelectedProblemPlant(false);
    setShowSuggestions(false);
    setShowChemicalPopup(false);
    setShowNaturalPopup(false);
    setUploadedImage(null);
  };

  return (
    <>
      <div className="risce-vineyard-flex-layout">
        <div className="risce-vineyard-image-wrapper">
          <img
            src={satelliteImage}
            alt="Satellite Vineyard"
            className="risce-vineyard-main-image"
          />

          {/* RED DOT HOTSPOTS */}
          {affectedPlants.map((dot) => (
            <div
              key={dot.id}
              className="risce-click-hotspot"
              style={{
                left: dot.x,
                top: dot.y,
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProblemPlant(false);
                setShowSuggestions(false);
                setUploadedImage(null);
                setSelectedDot(dot);
                setChatDot(dot);
                setShowChatBot(true);
              }}
            />
          ))}

          {/* AI CHAT BOT POPUP */}
          {showChatBot && chatDot && (
            <div
              className="risce-chatbot-popup"
              style={{
                left: chatDot.x,
                top: chatDot.y,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="risce-chatbot-icon">🤖</div>
              <button
                className="risce-chatbot-close"
                onClick={() => setShowChatBot(false)}
              >
                ✕
              </button>
              <p className="risce-chatbot-message">
                <strong>Dear Sina,</strong>
                <br />
                low NDVI is these area indicates low Nitrogen and decreased
                greenness in the plants. Want to ask us more?
              </p>
              <input
                type="text"
                className="risce-chatbot-input"
                placeholder="Ask anything......"
              />
              <div className="risce-chatbot-submit-wrap">
                <button className="risce-chatbot-submit">Submit</button>
              </div>
            </div>
          )}

          {/* FLOATING DISEASED PLANT CARD */}
          {selectedDot && !showChatBot && (
            <div
              className="risce-plant-preview-card"
              style={{
                left: selectedDot.x,
                top: selectedDot.y,
              }}
              onClick={() => setSelectedProblemPlant(true)}
            >
              <button
                className="risce-unlock-button"
                onClick={(e) => {
                  e.stopPropagation();
                  resetSelection();
                }}
              >
                ✕
              </button>

              <img
                src={Unhealthy}
                alt="Diseased Plant"
                className="risce-plant-preview-image"
              />

              <p>Diseased Vineyard</p>

              <div className="risce-click-hint">Click To Inspect</div>
            </div>
          )}
        </div>

        {/* RIGHT ANALYSIS PANEL */}
        {selectedProblemPlant && (
          <div className="risce-analysis-panel">
            <h2 className="risce-analysis-heading">
              Vineyard Disease Analysis
            </h2>

            <img
              src={uploadedImage ? uploadedImage : Unhealthy}
              alt="Analysis"
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
              onClick={() => setShowSuggestions(true)}
            >
              Check for Problems
            </button>

            {showSuggestions && (
              <div className="risce-result-box">
                <h3>Possible Issues</h3>
                <ul>
                  <li>
                    Pest Attack, Grasshoppers or Weevils (Certainty - 60%)
                  </li>
                </ul>

                <h3 className="risce-suggestion-heading">Suggestions</h3>

                <div className="risce-solution-button-container">
                  <button
                    className="risce-solution-button"
                    onClick={() => setShowChemicalPopup(true)}
                  >
                    Chemical Solution
                  </button>

                  <button
                    className="risce-solution-button"
                    onClick={() => setShowNaturalPopup(true)}
                  >
                    Natural Solution
                  </button>
                </div>
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
              onClick={() => setShowChemicalPopup(false)}
            >
              ✕
            </button>
            <h2>Chemical Solutions</h2>
            <ul>
              <li><strong>Nexa Lotte</strong></li>
              <li><strong>Celaflor</strong></li>
              <li><strong>Ink Home Protect 171</strong></li>
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
              onClick={() => setShowNaturalPopup(false)}
            >
              ✕
            </button>
            <h2>Natural Solutions</h2>
            <ul>
              <li>Cut and remove affected areas.</li>
              <li>Apply neem oil spray weekly.</li>
              <li>Maintain airflow between plants.</li>
              <li>Avoid excessive irrigation.</li>
            </ul>
          </div>
        </div>
      )}

      {/* STORIES SECTION */}
      <section className="vcs-section">
        <div className="vcs-header">
          <span className="vcs-eyebrow">From the Field</span>
          <h2 className="vcs-heading">Vine Care Stories</h2>
          <p className="vcs-subheading">
            Real stories from growers, farmers, and families who tend the vine
            season after season.
          </p>
        </div>

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