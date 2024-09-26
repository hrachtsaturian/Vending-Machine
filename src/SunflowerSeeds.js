import React from "react";
import { Link } from "react-router-dom";

// Category: snack - available in the vending machine
function SunflowerSeeds() {
  return (
    <div className="SunflowerSeeds">
      <h1>
        There is nobody who will reject the offer to have the sunflowerseeding
        time!
      </h1>
      <div>
        <img
          src="https://i.kym-cdn.com/photos/images/original/001/853/061/1f3"
          alt="sunflowerseeds img"
        />
      </div>
      <Link to="/">Back to the lineup</Link>
    </div>
  );
}

export default SunflowerSeeds;
