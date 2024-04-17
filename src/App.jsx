//import { useState } from "react";
import "./App.css";
//import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import PokeDetailPage from "./pages/PokeDetailPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  /* const trainer = useSelector((states) => states.trainer);

  console.log(trainer); */

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/pokedex/:name" element={<PokeDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
