import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import Image from "next/image";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/ianwag/cks2o26mb1cbu18qc49dxgvl6"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <LocationMarkerIcon
              role="img"
              className="h-10 text-red-400 cursor-pointer animate-bounce"
              onClick={() => setSelectedLocation(result)}
              aria-label="push-pin"
            />
          </Marker>

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className="z-50"
            >
              <div className=" relative p-12 bg-black w-80 h-32">
                <Image
                  src={result.img}
                  layout="fill"
                  objectFit="cover"
                  className="pb-1"
                />
              </div>
              <p className="font-semibold text-lg w-80 break-words">
                {result.title}
              </p>
              <p className="text-sm">{result.total}</p>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
