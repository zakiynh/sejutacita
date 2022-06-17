import { FaBars } from "react-icons/fa";

export default function Navbar({active, setActive}) {
    return (
        <nav className="h-[15%] bg-white border-b-2 border-yellow-400 flex justify-between">
            <div className="w-[50%] flex items-center">
                <button className="lg:hidden ml-2 text-2xl hover:text-gray-500" onClick={() => setActive(!active)}>
                    <FaBars />
                </button>
                <img
                    src="https://sejutacita.id/static/media/logo-bg-new.14982478.png"
                    alt="log-kar"
                    className="ml-5 w-28 lg:w-40"
                />
            </div>
            <div className="flex space-x-3 items-center p-3">
                <div className="flex space-x-1">
                    <h1 className="text-[#1c1a4e] hidden lg:block">Hallo, User</h1>
                </div>
                <h1 className="w-12 h-12 flex items-center justify-center rounded-full border-2 lg:w-16 lg:h-16 border-yellow-400">
                    <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0" className="h-full w-full rounded-full "/>
                </h1>
            </div>
        </nav>
    );
}