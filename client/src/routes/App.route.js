import React from "react";
import "../styles/index.scss";
import { Routes, Route } from "react-router-dom";
import MemberView from "./MemberView.route";
import Login from "./Login.route";
import Home from "./Home.route";
import NotFound from "./NotFound.route";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/:code" element={<MemberView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
