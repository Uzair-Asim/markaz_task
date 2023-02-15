import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Profile } from "./containers";
import { Errorpage } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
};

export default App;
