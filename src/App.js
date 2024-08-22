import React from "react";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Homepage from "./pages/Homepage";
import Music from "./pages/Music";
import Sport from "./pages/Sport";
import Entertainment from "./pages/Entertainment";
import Technology from "./pages/Technology";
import Health from "./pages/Health";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/music" element={<Music category="music" />} />
        <Route path="/sport" element={<Sport category="sports" />} />
        <Route path="/technology" element={<Technology category="technology" />} />
        <Route path="/health" element={<Health category="health" />} />
        <Route path="/entertainment" element={<Entertainment category="entertainment" />} />
      </Routes>
     {/* <Signin/> */}

    </>
  );
}
