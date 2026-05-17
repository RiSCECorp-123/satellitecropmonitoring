import { useNavigate } from "react-router-dom";

import "../styles/cropguide.unique.css";

const DroughtHerbGuide = () => {

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
        Drought Resilient Herbs
      </h1>

      <p className="risce-guide-description">

        Oregano, Lavender, and Rosemary are
        Mediterranean herbs highly suitable
        for dry climates and low-water
        agricultural systems in Germany.

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

            <td>June - October</td>

            <td>
              Requires well-drained soil
              and full sunlight.
            </td>

            <td>
              Very low irrigation requirement,
              avoid overwatering.
            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default DroughtHerbGuide;