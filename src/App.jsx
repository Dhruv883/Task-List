import React from "react";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import ProjectDetails from "./Components/ProjectDetails";
import Today from "./Components/Today";
import Week from "./Components/Week";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative flex overflow-hidden">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/all" element={<Home />}></Route>
            <Route path="/today" element={<Today />}></Route>
            <Route path="/week" element={<Week />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/projects/:id" element={<ProjectDetails />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
