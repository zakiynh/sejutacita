import { FaClipboardList, FaBookOpen } from "react-icons/fa";
// import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="bg-[#1c1a4e] w-0 lg:w-1/4 ">
            <div className="bg-[#1c1a4e] text-left border-r-2 border-yellow-400 m-5 space-y-3">
                <div className="flex space-x-2 text-white items-center active:text-white hover:text-yellow-400">
                    <FaClipboardList />
                    <h1>Category</h1>
                </div>
                <div className="flex space-x-2 text-white items-center active:text-white hover:text-yellow-400">
                    <FaBookOpen />
                    <h1>Book</h1>
                </div>
            </div>
        </div>
    );
}
