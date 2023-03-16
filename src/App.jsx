import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative flex">
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="" element = { /}></Route>
            <Route path="" element = { /}></Route>
            <Route path="" element = { /}></Route>
            <Route path="" element = { /}></Route> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
