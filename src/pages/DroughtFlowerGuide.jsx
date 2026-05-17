import { useNavigate } from "react-router-dom";

import "../styles/cropguide.unique.css";

const DroughtFlowerGuide = () => {

  const navigate = useNavigate();

  return (

    <div className="risce-guide-page">

      <button
        className="risce-back-button"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <h1 className="risce-guide-heading">
        Drought Resilient Flowers
      </h1>

      <p className="risce-guide-description">

        Coneflower and Yarrow are excellent
        drought-resistant flowers commonly grown
        in Germany for pollinator support and
        medicinal uses.

      </p>

      <table className="risce-guide-table">

        <thead>

          <tr>

            <th>Planting Time</th>

            <th>Harvesting Time</th>

            <th>Care Instructions</th>

            <th>Irrigation Instructions</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>April - May</td>

            <td>June - September</td>

            <td>
              Requires direct sunlight,
              remove dry blooms regularly.
            </td>

            <td>
              Light watering once or twice
              weekly.
            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default DroughtFlowerGuide;