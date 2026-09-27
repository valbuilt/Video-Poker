import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Header from "./components/Header/Header.tsx";
import PlayerSelectPage from "./pages/PlayerSelectPage/PlayerSelectPage.tsx";
import GamePage from "./pages/GamePage/GamePage.tsx";
import RulesPage from "./pages/RulesPage/RulesPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PlayerSelectPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
