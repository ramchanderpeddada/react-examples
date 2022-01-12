import React, { useContext } from "react";
import { ImageSizeContext } from "./Context";
import { getImageUrl } from "./Utilis";

const PlaceImage = ({ place }) => {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
};

export default PlaceImage;
