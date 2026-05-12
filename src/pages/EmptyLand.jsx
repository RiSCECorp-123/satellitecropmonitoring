// src/pages/EmptyLand.jsx

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "../styles/emptyland.unique.css";
import Applefruit from '../assets/Apple.jpg';
import Corn from '../assets/Corn.jpg';
import Lentils from '../assets/Lentils.jpg';
import Pear from '../assets/Pear.jpg';
import Soybean from '../assets/Soybean.jpg';
import Sunflower from '../assets/Rice.jpg';
import Rice from '../assets/Rice.jpg';

const EmptyLand = () => {

  const navigate = useNavigate();

  const [selectedPreferences, setSelectedPreferences] =
    useState([]);

  const cropCategories = [

    {
      title: "Drought Resilient Fruit Trees",

      crops: [

        {
          image: {Applefruit},
          cropName: "Apple"
        },

        {
          image: {Pear},
          cropName: "Pear"
        }
      ]
    },

    {
      title: "Drought Resilient Horticulture",

      crops: [

        {
          image: {Sunflower},
          cropName: "Sunflower"
        }
      ]
    },

    {
      title: "Drought Resilient Cereals",

      crops: [

        {
          image: {Corn},
          cropName: "Corn"
        },

        {
          image: {Rice},
          cropName: "Rice"
        }
      ]
    },

    {
      title: "Drought Resilient Legumes",

      crops: [

        {
          image: {Soybean},
          cropName: "Soy"
        },

        {
          image: {Lentils},
          cropName: "Lentils"
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

  const handlePreferenceClick = (item) => {

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

  return (

    <div className="risce-empty-land-page">

      {/* TOP */}
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

              {/* TITLE */}
              <h3 className="risce-suggestion-title">

                {category.title}

              </h3>

              {/* IMAGE ROW */}
              <div className="risce-suggestion-image-row">

                {category.crops.map((crop, cropIndex) => (

                  <div
                    key={cropIndex}
                    className="risce-suggestion-image-card"
                  >
                      <h4 style={{textAlign:"center"}}>Suggested</h4>
                    <img
                      src={crop.image}
                      alt={crop.cropName}
                      className="risce-suggestion-image"
                      />

                    <p className="risce-suggestion-image-title">

                      {crop.cropName}

                    </p>

                  </div>
                ))}

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

            {/* SUBMIT */}
            <button
              className="risce-submit-button"

              onClick={() => {
                navigate("/under-construction");
              }}
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