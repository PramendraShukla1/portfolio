import React from "react";
import Header from "./components/Header";
import AboutandExperience from "./components/AboutandExperience";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./utils/Layout";

const App = () => {
  return (
    <div className="p-36 pt-10">
    <Router>
    <Routes>
      <Route path="/" element={< Layout/>}>
        <Route element={<AboutandExperience />} index/>
      </Route>
    </Routes>
  </Router>
    </div>
  );
};

export default App;
