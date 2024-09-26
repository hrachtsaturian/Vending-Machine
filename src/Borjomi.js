import React from "react";
import { Link } from "react-router-dom";

// Category: drink - available in the vending machine
function Borjomi() {
  return (
    <div className="Borjomi">
      <h1>Nothing more healthy than drinking Borjomi!</h1>
      <h1>
        Let's make kidneys relax - they don't need to filter body from anything
        toxic anymore!
      </h1>
      <div>
        <img
          src="https://borjomi.com/_next/image?url=https%3A%2F%2Fstatic.borjomi.com%2Fuploads%2Fbrandhistorymaindesktopforeign-f4cc1929-0a82d02d-6aa9d012-2d3954eb.jpeg&w=1920&q=75"
          alt="borjomi img"
        />
      </div>
      <Link to="/">Back to the lineup</Link>
    </div>
  );
}

export default Borjomi;
