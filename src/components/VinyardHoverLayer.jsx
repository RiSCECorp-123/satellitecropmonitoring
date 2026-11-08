import { useState } from "react";
import "../styles/vineyard.unique.css";
import Unhealthy from "../assets/unhealthy.png";

/* ──────────────────────────────────────────────
   11 DISEASE HOTSPOTS  (x / y are % of image)
   ────────────────────────────────────────────── */
const diseaseHotspots = [
  {
    id: 1,
    x: "12%",
    y: "20%",
    name: "Downy Mildew",
    organism: "Plasmopara viticola",
    symptoms:
      "Oily yellow or pale-green lesions on the upper leaf surface; white downy growth may appear on the underside in humid conditions. Infections can also damage inflorescences and young berries.",
    remedies: [
      "Monitor rainfall, temperature and leaf-wetness conditions; use a locally validated disease-warning model where available.",
      "Open the canopy through shoot positioning and selective leaf removal to improve drying.",
      "Remove heavily infected tissue where practical and manage vineyard floor vegetation to reduce humidity.",
      "Where needed, use only locally authorised fungicides, respecting label rates, timing, resistance-management groups and pre-harvest intervals.",
    ],
    fieldNote: "A water mould (oomycete), not a true fungus.",
  },
  {
    id: 2,
    x: "35%",
    y: "14%",
    name: "Powdery Mildew",
    organism: "Erysiphe necator",
    symptoms:
      "White-grey powdery colonies on leaves, shoots and berries. Berries may become scarred, split or fail to develop normally.",
    remedies: [
      "Maintain an open, well-aerated canopy and avoid excessive nitrogen.",
      "Scout early, especially around flowering and fruit set.",
      "Sulphur and other products may be options where authorised and suitable for the cultivar and weather; avoid conditions that increase phytotoxicity risk.",
      "Rotate fungicide modes of action and follow resistance-management guidance.",
    ],
    fieldNote: null,
  },
  {
    id: 3,
    x: "60%",
    y: "22%",
    name: "Botrytis Bunch Rot",
    organism: "Botrytis cinerea",
    symptoms:
      "Soft brown rot and grey, dusty fungal growth on berries or compact bunches; infected berries may shrivel or cause bunch rot.",
    remedies: [
      "Use canopy management and appropriately timed fruit-zone leaf removal to improve ventilation.",
      "Avoid excessive nitrogen and manage bunch damage and insect pressure.",
      "Remove rotten bunches where feasible and handle fruit gently.",
      "Use registered Botrytis-specific measures only when risk and local guidance justify them.",
    ],
    fieldNote: null,
  },
  {
    id: 4,
    x: "82%",
    y: "17%",
    name: "Black Rot",
    organism: "Phyllosticta ampelicida (syn. Guignardia bidwellii)",
    symptoms:
      "Small brown leaf lesions that may develop dark margins; berries can turn dark, shrivel and become hard mummies.",
    remedies: [
      "Remove and destroy mummified berries and infected canes during sanitation, where permitted.",
      "Improve canopy airflow and reduce prolonged wetness.",
      "Use weather-informed scouting during susceptible growth stages.",
      "If necessary, apply locally registered products according to regional recommendations and label directions.",
    ],
    fieldNote: null,
  },
  {
    id: 5,
    x: "20%",
    y: "44%",
    name: "Esca / Grapevine Trunk Disease Complex",
    organism:
      "A complex involving several wood-colonising fungi, including Phaeomoniella chlamydospora and Fomitiporia species",
    symptoms:
      "Tiger-stripe leaf symptoms, interveinal discolouration, internal wood decay, chronic decline or sudden wilting (apoplexy).",
    remedies: [
      "Mark and monitor symptomatic vines; symptoms can be intermittent and are not always visible every year.",
      "Prune in dry conditions where practical and minimise large wounds.",
      "Remove dead or severely affected wood; consider trunk renewal or retraining only with expert guidance.",
      "Remove and replace vines that are beyond recovery; dispose of infected wood responsibly.",
      "Use only authorised pruning-wound protection where recommended.",
    ],
    fieldNote: null,
  },
  {
    id: 6,
    x: "50%",
    y: "40%",
    name: "Eutypa Dieback",
    organism: "Eutypa lata",
    symptoms:
      "Short, stunted shoots; small, chlorotic or distorted leaves; dead arms and wedge-shaped internal wood necrosis.",
    remedies: [
      "Prune during suitable dry weather and avoid major pruning immediately before forecast rain where feasible.",
      "Remove infected arms well below visibly affected wood, using expert assessment.",
      "Protect fresh pruning wounds with products authorised for this use in the country concerned.",
      "Remove severely affected vines and manage infected wood to reduce inoculum.",
    ],
    fieldNote: null,
  },
  {
    id: 7,
    x: "76%",
    y: "47%",
    name: "Phomopsis Cane and Leaf Spot",
    organism: "Diaporthe ampelina (syn. Phomopsis viticola)",
    symptoms:
      "Small dark leaf spots, black lesions on basal internodes, cane cracking and weakened shoots; infections may affect young clusters.",
    remedies: [
      "Remove infected canes during dormant pruning and reduce carry-over inoculum.",
      "Use clean planting material and inspect young shoots during wet spring periods.",
      "Maintain an open canopy to aid drying.",
      "Where disease pressure warrants it, follow local preventive spray advice and authorised product labels.",
    ],
    fieldNote: null,
  },
  {
    id: 8,
    x: "14%",
    y: "70%",
    name: "Flavescence Dorée",
    organism:
      "Phytoplasma (16SrV group); transmitted chiefly by Scaphoideus titanus",
    symptoms:
      "Yellowing in white cultivars or reddening in red cultivars, downward leaf rolling, poor cane lignification and shrivelled or poorly ripening bunches.",
    remedies: [
      "Notify the relevant plant-health authority or local vineyard advisory service when suspected; this is a regulated disease in affected areas.",
      "Follow official survey, removal and vector-control requirements in the region.",
      "Use certified planting material and monitor vector presence according to local protocols.",
      "Do not rely on sprays to cure an infected vine; there is no curative treatment for the phytoplasma in the plant.",
    ],
    fieldNote: null,
  },
  {
    id: 9,
    x: "40%",
    y: "66%",
    name: "Grapevine Leafroll Disease",
    organism: "Grapevine leafroll-associated viruses (GLRaVs)",
    symptoms:
      "Downward-rolling leaves; red cultivars may show red interveinal areas with green veins, while white cultivars may show yellowing. Fruit ripening and sugar accumulation can be delayed.",
    remedies: [
      "Plant certified virus-tested material and maintain traceability of propagation stock.",
      "Survey blocks and confirm suspected cases through an accredited diagnostic laboratory.",
      "Remove confirmed infected vines where appropriate to reduce sources of infection.",
      "Monitor and manage vector insects using integrated, locally approved methods.",
    ],
    fieldNote: null,
  },
  {
    id: 10,
    x: "65%",
    y: "73%",
    name: "Crown Gall",
    organism: "Allorhizobium vitis (syn. Agrobacterium vitis)",
    symptoms:
      "Irregular tumour-like galls, often near the crown, trunk, graft union or wounds; vines may show reduced vigour.",
    remedies: [
      "Use healthy, certified nursery material and inspect graft unions before planting.",
      "Reduce trunk injury and protect vines from avoidable frost and mechanical damage.",
      "Remove severely affected vines where advised; manage infected material responsibly.",
      "Improve site and cultivar/rootstock suitability where recurrent frost injury is a problem.",
    ],
    fieldNote: null,
  },
  {
    id: 11,
    x: "86%",
    y: "60%",
    name: "Xylella fastidiosa",
    organism:
      "Xylella fastidiosa, a xylem-limited bacterium; subspecies fastidiosa, multiplex and pauca have been detected in Europe",
    symptoms:
      'Leaf scorch beginning at the leaf margins, with a sharp transition between dead and green tissue; leaves may drop leaving the petiole attached ("matchstick" petioles); uneven cane maturation with green islands; shrivelled or dried bunches; reduced vigour and progressive decline, often ending in vine death within a few seasons. Symptoms can resemble drought, salt or nutrient stress.',
    remedies: [
      "Notify the plant-health authority immediately when suspected; Xylella fastidiosa is a regulated quarantine pest in the EU and findings trigger official measures.",
      "Confirm the diagnosis through an accredited laboratory test (for example PCR); do not rely on visual symptoms alone.",
      "Follow official outbreak measures: removal of infected vines and host plants, demarcated-zone rules and movement restrictions.",
      "Manage vectors: reduce spittlebug nymphs by managing ground cover and weeds in spring, and use only authorised, officially recommended measures against adult vectors.",
      "Use certified, pathogen-free planting material; EFSA recognises hot-water treatment of dormant grapevine material (50 °C for 45 minutes) as a reliable measure against the bacterium.",
      "Do not rely on sprays or antibiotics to cure infected vines; treatments tested in Apulia reduced symptoms but did not eliminate the pathogen.",
    ],
    fieldNote: null,
  },
];

/* ──────────────────────────────────────────────
   STORIES  (unchanged)
   ────────────────────────────────────────────── */
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

/* ──────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────── */
const VineyardHoverLayer = ({ satelliteImage }) => {
  const [selectedDot, setSelectedDot] = useState(null);
  const [selectedProblemPlant, setSelectedProblemPlant] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [chatDot, setChatDot] = useState(null);

  /* ---- helpers ---- */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  const resetSelection = () => {
    setSelectedDot(null);
    setSelectedProblemPlant(false);
    setShowSuggestions(false);
    setUploadedImage(null);
  };

  const handleDotClick = (dot) => {
    resetSelection();
    setSelectedDot(dot);
    setChatDot(dot);
    setShowChatBot(true);
  };

  /* ──────── RENDER ──────── */
  return (
    <>
      <div className="risce-vineyard-flex-layout">
        {/* ===== LEFT: SATELLITE IMAGE + DOTS ===== */}
        <div className="risce-vineyard-image-wrapper">
          <img
            src={satelliteImage}
            alt="Satellite Vineyard"
            className="risce-vineyard-main-image"
          />

          {/* 11 RED BLINKING HOTSPOTS */}
          {diseaseHotspots.map((dot) => (
            <div
              key={dot.id}
              className="risce-click-hotspot"
              style={{ left: dot.x, top: dot.y }}
              onClick={(e) => {
                e.stopPropagation();
                handleDotClick(dot);
              }}
              title={dot.name}
            />
          ))}

          {/* AI CHATBOT POPUP (dynamic per dot) */}
          {showChatBot && chatDot && (
            <div
              className="risce-chatbot-popup"
              style={{ left: chatDot.x, top: chatDot.y }}
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
                Our satellite scan detected signs of{" "}
                <strong>{chatDot.name}</strong> in this zone, caused by{" "}
                <em>{chatDot.organism}</em>. Click the card below to inspect
                further.
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
              style={{ left: selectedDot.x, top: selectedDot.y }}
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

              <p>{selectedDot.name}</p>

              <div className="risce-click-hint">Click To Inspect</div>
            </div>
          )}
        </div>

        {/* ===== RIGHT: ANALYSIS PANEL ===== */}
        {selectedProblemPlant && selectedDot && (
          <div className="risce-analysis-panel">
            <h2 className="risce-analysis-heading">
              Vineyard Disease Analysis
            </h2>

            <img
              src={uploadedImage || Unhealthy}
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

            {/* ── INLINE RESULTS (unique per dot) ── */}
            {showSuggestions && (
              <div className="risce-result-box">
                {/* Disease name */}
                <h3 className="risce-disease-name">{selectedDot.name}</h3>

                {/* Causal organism */}
                <p className="risce-organism">
                  <strong>Causal organism:</strong> {selectedDot.organism}
                </p>

                {/* Symptoms */}
                <h4 className="risce-symptom-heading">Typical Symptoms</h4>
                <p className="risce-symptom-text">{selectedDot.symptoms}</p>

                {/* Remedies */}
                <h4 className="risce-suggestion-heading">
                  Management &amp; Remedies
                </h4>
                <ul className="risce-remedy-list">
                  {selectedDot.remedies.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>

                {/* Optional field note */}
                {selectedDot.fieldNote && (
                  <p className="risce-field-note">
                    <strong>Field note:</strong> {selectedDot.fieldNote}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ===== STORIES SECTION (unchanged) ===== */}
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
