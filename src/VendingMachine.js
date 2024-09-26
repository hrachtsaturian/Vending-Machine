import React from "react";
import { Link } from "react-router-dom";

// VendingMachine component is the app where we have three types of snacks or drink to choose from
function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>Welcome to our Vending Machine!</h1>
      <h3>Please choose one of the available items in our store</h3>
      <hr></hr>
      <Link to="/borjomi">Borjomi</Link>
      <hr></hr>
      <Link to="/shawarma">Shawarma</Link>
      <hr></hr>
      <Link to="/sunflowerseeds">SunflowerSeeds</Link>
      <hr></hr>
    </div>
  );
}

export default VendingMachine;
