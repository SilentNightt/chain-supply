"use client";

import styles from "./styles.module.scss";
import {
  GoogleMap,
  LoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";

const center = { lat: 55.751244, lng: 37.618423 }; // Москва

export function GoMap() {
  const [map, setMap] = useState(/** @type google.maps.Map */ null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AlzaSyMiQa27yDQGhA_sOXe5Iatqk2BJnk9FMGn",

    libraries: ["places"],
  });
  if (!isLoaded) {
    return <h1>load</h1>;
  }
  return (
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
      onLoad={(map) => setMap(map)}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
