

import { useState } from "react";

import "../styles/vineyard.unique.css";

const VineyardHoverLayer = () => {

  /* PLANT STATUS */
  const [hoveredPlant, setHoveredPlant] =
    useState(null);

  /* MOUSE POSITION */
  const [cardPosition, setCardPosition] =
    useState({
      x: 0,
      y: 0
    });

  

  const detectPlantHealth = (
    mouseX,
    mouseY,
    width,
    height
  ) => {

    /*
      CUSTOM REGION LOGIC

      You can later replace this
      with real AI segmentation.
    */

    const horizontalRatio =
      mouseX / width;

    const verticalRatio =
      mouseY / height;

    /*
      DARKER REGIONS
    */

    if (
      horizontalRatio < 0.45 &&
      verticalRatio < 0.55
    ) {
      return 1;
    }

    /*
      WHITE / DRY REGIONS
    */

    return 0;
  };

  /* HOVER */
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

  /* LEAVE */
  const handleMouseLeave = () => {
    setHoveredPlant(null);
  };

  return (

    <div className="risce-vineyard-image-wrapper">

      {/* SATELLITE IMAGE */}
      <img
        src="/assets/Vineyard.jpg"
        alt="satellite"

        className="risce-vineyard-main-image"

        onMouseMove={handleMouseMove}

        onMouseLeave={handleMouseLeave}
      />

      {/* AI DETECTION CARD */}
      {hoveredPlant !== null && (

        <div
          className="risce-plant-preview-card"

          style={{
            top: cardPosition.y + 20,
            left: cardPosition.x + 20
          }}
        >

          {/* IMAGE */}
          <img
  src={
    hoveredPlant === 1
      ? `${import.meta.env.BASE_URL}assets/Vine.png`
      : `${import.meta.env.BASE_URL}assets/affected-vine.png`
  }

  alt="plant"

  className="risce-plant-preview-image"
/>

          {/* LABEL */}
          <p>

            {hoveredPlant === 1
              ? "Healthy Vineyard"
              : "Dying Vineyard"}

          </p>

        </div>
      )}

    </div>
  );
};

export default VineyardHoverLayer;