import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import Loader from "../Extras/Loader";
const GoogleMaps = () => {
  let [currentLocation, setCurrentLocation] = useState(null);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: Number(latitude), lng: Number(longitude) });
          setLoading(false);
        },
        (error) => {
          console.log("Error:", error.message);
          setLoading(false);
        }
      );
    } else {
      console.log("Geolocation not supported in your browser.");
      setLoading(false);
    }
  }, []);
  const center = { lat: -34.397, lng: 150.644 };
  let containerStyle = {
    width: "90%",
    height: "500px",
    top: "10px",
  };
  const apikey = "AIzaSyBUp8E7OghfEFg9fJ1ePokoOhE1I8MaD-M";

  return (
    <div>
      <LoadScript googleMapsApiKey={apikey}>
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentLocation || center}
            zoom={10}
          >
            {currentLocation && <Marker position={currentLocation} />}
          </GoogleMap>
        )}
      </LoadScript>
    </div>
  );
};
export default GoogleMaps;
