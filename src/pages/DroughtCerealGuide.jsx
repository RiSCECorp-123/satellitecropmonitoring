import { useNavigate } from "react-router-dom";

import "../styles/cropguide.unique.css";

const DroughtCerealGuide = () => {

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
        Drought Resilient Cereals
      </h1>

      <p className="risce-guide-description">

        Winter Rye and Wheat are highly adaptable
        cereals suitable for low rainfall regions
        across Germany. Winter Rye especially
        performs well in sandy soils.

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

            <td>September - October</td>

            <td>July - August</td>

            <td>
              Requires weed management,
              moderate fertilization.
            </td>

            <td>
              Minimal irrigation required
              after establishment.
            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default DroughtCerealGuide;