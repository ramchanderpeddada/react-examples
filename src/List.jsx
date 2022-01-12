import React from "react";
import { places } from "./Data";
import Place from "./Place";
const List = () => {
  const listItem = places.map((place) => (
    <li key={place.id}>
      <Place place={place} />
    </li>
  ));
  return <ul>{listItem}</ul>;
};

export default List;
