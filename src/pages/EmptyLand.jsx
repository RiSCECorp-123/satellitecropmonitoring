// src/pages/EmptyLand.jsx

import { useState } from "react";

import "../styles/emptyland.unique.css";

const EmptyLand = () => {

  const [selectedPreferences, setSelectedPreferences] =
    useState([]);

  const cropCategories = [

    {
      title: "Drought Resilient Fruit Trees",
      image: "/assets/apple-pears.jpg",
      cropName: "Apple & Pears"
    },

    {
      title: "Drought Resilient Horticulture",
      image: "/assets/sunflower.jpg",
      cropName: "Sunflower"
    },

    {
      title: "Drought Resilient Cereals",
      image: "/assets/corn-rice.jpg",
      cropName: "Corn & Rice"
    },

    {
      title: "Drought Resilient Legumes",
      image: "/assets/soy-lentils.jpg",
      cropName: "Soy & Lentils"
    },

    {
      title: "You Can Add More",
      image: "/assets/more-crops.jpg",
      cropName: "Custom Crop"
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

      {/* HEADER */}
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

      {/* MAIN CONTENT */}
      <div className="risce-empty-land-main-grid">

        {/* LEFT COLUMN */}
        <div className="risce-empty-land-left-column">

          <h2 className="risce-column-heading">
            Crop Categories
          </h2>

          {cropCategories.map((item, index) => (

            <div
              key={index}
              className="risce-category-card"
            >

              <div className="risce-category-title">

                {item.title}

              </div>

            </div>
          ))}

        </div>

        {/* CENTER COLUMN */}
        <div className="risce-empty-land-center-column">

          <h2 className="risce-column-heading">
            Suggested Crops
          </h2>

          {cropCategories.map((item, index) => (

            <div
              key={index}
              className="risce-crop-image-card"
            >

              <img
                src={item.image}
                alt={item.cropName}
                className="risce-crop-image"
              />

              <div className="risce-crop-title">

                {item.cropName}

              </div>

            </div>
          ))}

        </div>

        {/* RIGHT COLUMN */}
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

          </div>

        </div>

      </div>

    </div>
  );
};

export default EmptyLand;