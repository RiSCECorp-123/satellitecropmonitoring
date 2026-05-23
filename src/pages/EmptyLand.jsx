// src/pages/EmptyLand.jsx

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "../styles/emptyland.unique.css";

import Apricot from "../assets/apricot.jpg";
import Winegrapes from "../assets/winegrapes.jpg";
import Yarrowflower from "../assets/yarrowflower.jpg";
import Coneflower from "../assets/coneflower.jpg";
import WinterRye from "../assets/winter_rye.jpg";
import Wheat from "../assets/wheat.jpg";
import Oregano from "../assets/oregano.jpg";
import Lavender from "../assets/lavender.jpg";
import Rosemary from "../assets/rosemary.jpg";

const EmptyLand = () => {

  const navigate = useNavigate();

  const [selectedPreferences, setSelectedPreferences] =
    useState([]);

  const [showError, setShowError] =
    useState(false);

  const cropCategories = [

    {
      title: "Drought Resilient Fruit Trees",

      route: "/fruit-guide",

      crops: [

        {
          image: Apricot,
          cropName: "Apricot",

          tags: [
            "Low Maintenance",
            "High Market Value"
          ]
        },

        {
          image: Winegrapes,
          cropName: "Wine Grapes",

          tags: [
            "High Market Value",
            "Local Market"
          ]
        }
      ]
    },

    {
      title: "Drought Resilient Flowers",

      route: "/flower-guide",

      crops: [

        {
          image: Coneflower,
          cropName: "Coneflower",

          tags: [
            "Low Maintenance",
            "Short Harvest Cycle"
          ]
        },

        {
          image: Yarrowflower,
          cropName: "Yarrow Flower",

          tags: [
            "Low Maintenance",
            "Local Market"
          ]
        }
      ]
    },

    {
      title: "Drought Resilient Cereals",

      route: "/cereal-guide",

      crops: [

        {
          image: WinterRye,
          cropName: "Winter Rye",

          tags: [
            "Short Harvest Cycle",
            "Low Maintenance"
          ]
        },

        {
          image: Wheat,
          cropName: "Wheat",

          tags: [
            "Local Market",
            "High Market Value"
          ]
        }
      ]
    },

    {
      title: "Drought Resilient Herbs",

      route: "/herb-guide",

      crops: [

        {
          image: Oregano,
          cropName: "Oregano",

          tags: [
            "Low Maintenance",
            "Local Market"
          ]
        },

        {
          image: Lavender,
          cropName: "Lavender",

          tags: [
            "High Market Value",
            "Low Maintenance"
          ]
        },

        {
          image: Rosemary,
          cropName: "Rosemary",

          tags: [
            "Short Harvest Cycle",
            "Local Market"
          ]
        }
      ]
    }
  ];

  const preferences = [

    "Low Maintenance",

    "Short Harvest Cycle",

    "High Market Value",

    "Local Market"
  ];

  /* SELECT PREFERENCE */
  const handlePreferenceClick = (item) => {

    setShowError(false);

    if (selectedPreferences.includes(item)) {

      setSelectedPreferences(

        selectedPreferences.filter(
          (pref) => pref !== item
        )
      );

    } else {

      setSelectedPreferences([
        ...selectedPreferences,
        item
      ]);
    }
  };

  /* SUBMIT */
  const handleSubmit = () => {

    if (selectedPreferences.length === 0) {

      setShowError(true);

      return;
    }

    navigate("/under-construction");
  };

  /* FILTER LOGIC */
  const isCropMatched = (cropTags) => {

    if (selectedPreferences.length === 0) {

      return true;
    }

    /*
      ALL SELECTED TAGS
      MUST MATCH
    */

    return selectedPreferences.every(

      (pref) => cropTags.includes(pref)
    );
  };

  return (

    <div className="risce-empty-land-page">

      {/* TOP SECTION */}
      <div className="risce-empty-land-top-section">

        <h1 className="risce-empty-land-heading">
          Hello, Sina 👋
        </h1>

        <h3 className="risce-empty-land-subheading">
          Your area is drought prone.
        </h3>

        <p className="risce-empty-land-description">

          Do you want to know what you can grow
          best in your empty land?

        </p>

      </div>

      {/* MAIN GRID */}
      <div className="risce-empty-land-main-grid">

        {/* LEFT SECTION */}
        <div className="risce-empty-land-left-section">

          <h2 className="risce-column-heading">

            Suggested Crops

          </h2>

          {cropCategories.map((category, index) => (

            <div
              key={index}
              className="risce-suggestion-group"
            >

              {/* CATEGORY TITLE */}
              <h3 className="risce-suggestion-title">

                {category.title}

              </h3>

              {/* CROPS */}
              <div className="risce-suggestion-image-row">

                {category.crops.map((crop, cropIndex) => {

                  const matched =
                    isCropMatched(crop.tags);

                  return (

                    <div
                      key={cropIndex}

                      className={
                        matched

                          ? "risce-suggestion-image-card"

                          : "risce-suggestion-image-card risce-card-blur"
                      }
                    >

                      <h4 className="risce-suggested-text">

                        Suggested

                      </h4>

                      {/* IMAGE */}
                      <img
                        src={crop.image}

                        alt={crop.cropName}

                        className="risce-suggestion-image"
                      />

                      {/* TITLE */}
                      <p className="risce-suggestion-image-title">

                        {crop.cropName}

                      </p>

                      {/* GUIDE BUTTON */}
                      <button
                        className="risce-guide-button"

                        onClick={() =>
                          navigate(category.route)
                        }
                      >

                        Instructions & Guide

                      </button>

                    </div>
                  );
                })}

              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SECTION */}
        <div className="risce-empty-land-right-column">

          <h2 className="risce-column-heading">

            Mark Your Preferences

          </h2>

          <div className="risce-preference-container">

            {preferences.map((item, index) => (

              <button
                key={index}

                className={

                  selectedPreferences.includes(item)

                    ? "risce-preference-button risce-preference-button-active"

                    : "risce-preference-button"
                }

                onClick={() => {
                  handlePreferenceClick(item);
                }}
              >

                {item}

              </button>
            ))}

            {/* ERROR */}
            {showError && (

              <div className="risce-error-box">

                Please select at least
                1 preference.

              </div>
            )}

            {/* SUBMIT */}
            <button
              className="risce-submit-button"

              onClick={handleSubmit}
            >

              Submit

            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default EmptyLand;