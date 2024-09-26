import React from "react";
import { Link } from "react-router-dom";

// Category: food - available in the vending machine
function Shawarma() {
  return (
    <div className="Shawarma">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnDUr3B6mY9ZbZ3W9OBmV04_zvECEOZt3y-w&s"
          alt="shawarma img"
        />
      </div>
      <Link to="/">Back to the lineup</Link>
    </div>
  );
}

export default Shawarma;
