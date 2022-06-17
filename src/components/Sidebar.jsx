import { FaClipboardList, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar({active}) {
    return (
        <div className={"bg-[#1c1a4e] lg:w-1/4 " + (active ? "w-1/4 relative" : "w-0")}>
            <div className="bg-[#1c1a4e] text-left border-r-2 border-yellow-400 m-5 space-y-3">
                <Link to={"/"} className="flex space-x-2 text-white items-center active:text-white hover:text-yellow-400">
                    <FaClipboardList />
                    <h1>Category</h1>
                </Link>
            </div>
        </div>
    );
}
