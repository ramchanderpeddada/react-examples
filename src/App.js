import { useState } from "react";
import { places } from "./Data";
import { getImageUrl } from "./Utilis";

const App = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => setIsLarge(e.target.checked)}
        />
        Use large images
      </label>
      <hr />
      <List imageSize={imageSize} />
    </>
  );
};

const List = ({ place, imageSize }) => {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} imageSize={imageSize} />
    </li>
  ));
  return <ul>{listItems}</ul>;
};

const Place = ({ place, imageSize }) => {
  return (
    <>
      <PlaceImage place={place} imageSize={imageSize} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
};

const PlaceImage = ({ place, imageSize }) => {
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
};
export default App;
