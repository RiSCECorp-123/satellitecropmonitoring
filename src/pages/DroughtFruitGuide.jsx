import { useNavigate } from "react-router-dom";

import "../styles/cropguide.unique.css";

const DroughtFruitGuide = () => {

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
        Drought Resilient Fruit Trees
      </h1>

      <p className="risce-guide-description">

        These fruit crops are highly suitable for
        dry regions of Germany including Brandenburg,
        Saxony-Anhalt, and parts of Bavaria.
        Apricot and Wine Grapes require moderate
        irrigation and grow well in sunny areas.

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

            <td>March - April</td>

            <td>July - September</td>

            <td>
              Full sunlight, annual pruning,
              nutrient-rich soil.
            </td>

            <td>
              Water deeply once every
              7-10 days during dry periods.
            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default DroughtFruitGuide;