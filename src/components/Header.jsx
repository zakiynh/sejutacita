import React from "react";
import { FaSistrix } from "react-icons/fa";

function Header({str}) {
  
    return (
        <div className="bg-white flex border-2 border-yellow-400 flex-col lg:flex-row justify-between rounded-md p-2 mb-1 text-left">
            <div className="lg:text-left text-[#1c1a4e]">
                <h1 className="text-3xl font-bold">Category List</h1>
                <h1 className="text-xl">List of all Category</h1>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-3 lg:items-center space-y-1">
                <div className="flex items-center justify-center h-10">
                    <div className="border-l-2 border-y-2 border-yellow-400 h-full pl-2">
                        <FaSistrix className="text-[#1c1a4e] font-bold text-xl h-full" />
                    </div>
                    <form className="w-full text-white">
                        <input
                            type="text"
                            className="lg:w-40 w-full h-10 px-1 border-y-2 border-r-2 border-yellow-400 text-[#1c1a4e] focus:outline-none"
                            placeholder="Find Category"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Header;