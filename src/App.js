import { useState } from "react";
import { places } from "./Data";
import List from "./List";
import { getImageUrl } from "./Utilis";
import { ImageSizeContext } from "./Context";

const App = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 200 : 100;
  return (
    <ImageSizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => setIsLarge(e.target.checked)}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  );
};

export default App;
