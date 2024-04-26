import AboutandExperience from "./components/AboutandExperience";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./utils/Layout";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div className="lg:p-36 p-5 lg:pt-10 ">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<AboutandExperience />} index />
            <Route element={<AboutMe />} path="/about-me" />
            <Route element={<Experience />} path="/experience" />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
