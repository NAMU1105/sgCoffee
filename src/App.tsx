import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { Div } from "./assets/styles/style";

function App() {
  return (
    <Div className="App">
      <Routes>
        <Route path="/" element={<div>main</div>} />
        <Route path="about" element={<div>about</div>} />{" "}
      </Routes>
    </Div>
  );
}

export default App;
