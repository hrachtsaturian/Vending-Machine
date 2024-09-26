import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import VendingMachine from "./VendingMachine";

import Borjomi from "./Borjomi";
import Shawarma from "./Shawarma";
import SunflowerSeeds from "./SunflowerSeeds";

// App component is the main component which renders the Vending Machine app
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/borjomi" element={<Borjomi />} />
          <Route path="/shawarma" element={<Shawarma />} />
          <Route path="/sunflowerseeds" element={<SunflowerSeeds />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
