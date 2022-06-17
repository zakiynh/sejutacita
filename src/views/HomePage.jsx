import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { Route, Routes } from "react-router-dom";

function HomePage() {
    return (
        <div className="lg:h-screen h-screen">
            <Navbar />
            <div className="h-[85%] flex">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}

export default HomePage;
