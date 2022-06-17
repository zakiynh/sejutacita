import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import BookContent from "../components/BookContent";
import { Route, Routes } from "react-router-dom";
import { useState } from "react"

function HomePage() {
    const [active, setActive] = useState(false)
    return (
        <div className="lg:h-screen h-screen">
            <Navbar active={active} setActive={setActive}/>
            <div className="min-h-[100%] lg:min-h-[85%] flex">
                <Sidebar active={active}/>
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/book/:categoryId" element={<BookContent />} />
                </Routes>
            </div>
        </div>
    );
}

export default HomePage;
