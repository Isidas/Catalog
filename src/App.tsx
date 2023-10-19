import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Basket from "./pages/Basket";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
