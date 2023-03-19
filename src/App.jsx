import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Projects from "./Components/Pages/Projects";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative flex">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/all" element = { /}></Route>
            <Route path="/today" element = { /}></Route>
            <Route path="/week" element = { /}></Route> */}
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
