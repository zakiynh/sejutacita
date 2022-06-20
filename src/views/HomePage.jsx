import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import BookContent from "../components/BookContent";
import LandingPage from "../components/LandingPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import BookMark from "../components/BookMark";

function HomePage() {
  const [active, setActive] = useState(false);
  return (
    <div className="lg:h-screen h-screen">
      <Navbar active={active} setActive={setActive} />
      <div className="min-h-[100%] lg:min-h-[85%] flex">
        <Sidebar active={active} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/category" element={<MainContent />} />
          <Route path="/book/:categoryId" element={<BookContent />} />
          <Route path="/bookmark" element={<BookMark />} />
        </Routes>
      </div>
    </div>
  );
}

export default HomePage;
