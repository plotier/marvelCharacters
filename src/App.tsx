import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import Favorites from "./pages/Favorites";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default App;
