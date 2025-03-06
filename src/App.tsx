import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Favorites from "./pages/Favorites";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<Character />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default App;
