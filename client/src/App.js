import React from "react";
import Photograph from "./pages/Photograph";
import Landing from "./pages/Landing";
import Music from "./pages/Music";
import SoccerData from "./pages/SoccerData";
import ThreeD from "./pages/ThreeD";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={"<Landing/>"} />
        <Route path="/soccer" element={"<SoccerData/>"} />
        <Route path="/photograph" element={"<Photograph/>"} />
        <Route path="/3d" element={"<ThreeD/>"} />
        <Route path="/music" element={"<Music/>"} />
      </Routes>
    </div>
  );
}

export default App;
