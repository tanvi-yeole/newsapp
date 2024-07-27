import React from "react";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Music from "./pages/Music";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Signin/> */}

    </>
  );
}
