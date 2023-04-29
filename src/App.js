import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Resume from "./Pages/Resume";
import Photos from "./Pages/Photos";

function App() {
  return (
    <div className="App">
      <Router basename="">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Photos" element={<Photos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
