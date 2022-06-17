import React from "react";

function CardBook({ el }) {
    return (
        <>
            <div className="border-2 border-yellow-400 mt-2 rounded-xl py-2 w-full lg:w-72">
                <div className="flex flex-row h-[80%] lg:flex-col lg:">
                    <div className="w-full lg:w-full text-[#1c1a4e] text-left p-2 space-y-1">
                        <div>
                            <img src={el.cover_url} className="rounded-xl mb-2"/>
                            <h1 className="text-sm font-bold">Name: </h1>
                            <h1 className="text-[#1c1a4e]">{el.title}</h1>
                            <h1 className="text-sm font-bold">Authors: </h1>
                            <h1 className="text-[#1c1a4e]">{el.authors}</h1>
                            <h1 className="text-sm font-bold">Description: </h1>
                            <h1 className="text-[#1c1a4e]">{el.description}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardBook;
