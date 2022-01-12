import React from "react";
import PlaceImage from "./PlaceImage.jsx";

const Place = ({ place, imageSize }) => {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
};

export default Place;
