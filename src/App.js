import "./App.css";
import React, { Suspense, lazy, startTransition } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("./Pages/Homepage"));
const Resume = lazy(() => import("./Pages/Resume"));
const Photos = lazy(() => import("./Pages/Photos"));

function App() {
  return (
    <div className="App">
      <Router basename="">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Photos" element={<Photos />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
