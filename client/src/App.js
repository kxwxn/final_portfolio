import React from "react";
import { useState, useEffect } from "react";
import Photograph from "./pages/Photograph";
import Landing from "./pages/Landing";
import Music from "./pages/Music";
import SoccerData from "./pages/SoccerData";
import ThreeD from "./pages/ThreeD";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [tyo, setTyo] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:3003/api/tokyo").then((response) => {
      setTyo(response.data.tokyo);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(tyo);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/soccer" element={<SoccerData />} />
        <Route path="/photograph" element={<Photograph tyo={tyo} />} />
        <Route path="/3d" element={<ThreeD />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </div>
  );
}

export default App;
