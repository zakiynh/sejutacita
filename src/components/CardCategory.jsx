import React from "react";
import { Link } from "react-router-dom";

function CardCategory({ cat }) {
    return (
        <>
            <div className="border shadow-inner rounded-xl py-2 w-full lg:w-72 h-[50%] hover:shadow-xl">
                <div className="flex flex-row h-[80%] lg:flex-col lg:">
                    <div className="w-full lg:w-full text-[#1c1a4e] text-left p-2 space-y-1">
                        <div>
                            <h1 className="text-sm font-bold">Name: </h1>
                            <h1 className="text-[#1c1a4e]">{cat.name}</h1>
                            <div>
                                <Link to={`/book/${cat.id}`}>
                                    <div className="bg-[#1c1a4e] mt-4 p-2 rounded-full">
                                        <h1 className="text-white text-center">Books</h1>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardCategory;
