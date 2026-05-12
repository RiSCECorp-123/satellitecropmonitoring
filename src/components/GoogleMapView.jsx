import {
  GoogleMap,
  LoadScript,
  Polygon,
  InfoWindow
} from "@react-google-maps/api";

import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  fieldPolygons
} from "../data/fieldPolygons";

import "../styles/map.unique.css";

const containerStyle = {
  width: "100%",
  height: "500px"
};

const center = {
  lat: 51.3335,
  lng: 12.2535
};

const GoogleMapView = () => {

  const navigate = useNavigate();

  const [hovered, setHovered] =
    useState(null);

  const [position, setPosition] =
    useState(null);

  /* CHECK VINEYARD */
  const isVineyard = (name) => {

    return (
      name.toLowerCase().includes("vineyard") ||
      name.toLowerCase().includes("viyeyard")
    );
  };

  return (

    <LoadScript
      googleMapsApiKey={
        import.meta.env.VITE_GOOGLE_MAPS_KEY
      }
    >

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >

        {fieldPolygons.map((field) => (

          <Polygon
            key={field.id}

            paths={field.paths}

            options={{
              fillColor: field.color,
              fillOpacity: 0.5,
              strokeColor: field.color,
              strokeWeight: 5
            }}

            /* HOVER */
            onMouseOver={(e) => {

              setHovered(field.name);

              setPosition({
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
              });
            }}

            /* REMOVE HOVER */
            onMouseOut={() => {

              setHovered(null);
            }}

            /* CLICK */
            onClick={() => {

              /* VINEYARD */
              if (isVineyard(field.name)) {

                navigate("/vineyard");
              }

              /* EMPTY LAND */
              else if (field.id === 3 ) {

                navigate("/empty-land");
              }
            }}
          />

        ))}

        {/* TOOLTIP */}
        {hovered && position && (

          <InfoWindow position={position}>

            <div className="risce-map-tooltip">
              {hovered}
            </div>

          </InfoWindow>
        )}

      </GoogleMap>

    </LoadScript>
  );
};

export default GoogleMapView;