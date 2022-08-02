import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Resume from "./Resume";
import Photography from "./Photography";

const nav = <Nav />;
const home = <Home />;
const resume = <Resume />;
const photos = <Photography />;
const git = <Link></Link>;

function App() {
  return (
    <div className="App">
      <header className="Justin-Danglade"></header>
      <Router>
        <body>
          {nav}
          <Routes>
            <Route path="/justin-danglade" element={home} />
            <Route path="/Res" element={resume} />
            <Route path="/Photos" element={photos} />
          </Routes>
        </body>
      </Router>
    </div>
  );
}

export default App;
