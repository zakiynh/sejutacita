import React, { useState } from "react";
import { useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import { bookmark, doBookmark } from "../store/actions/action";
import { useDispatch } from "react-redux"

function CardBook({ el, currentPage }) {
    console.log("el: ", el);
    // console.log("currentPage: ", currentPage);
    const [getBookmark, setGetBookmark] = useState([])
    const [show, setShow] = useState(true)
    let bookmarks = []
    function handleBookmark() {
        bookmarks = []
        const dataBookmark = JSON.parse(localStorage.getItem("bookmark"));
        if (dataBookmark) {
            bookmarks = dataBookmark;
        }
        bookmarks.push(el.id)
        localStorage.setItem("bookmark", JSON.stringify(bookmarks));
    }
    const dispatch = useDispatch()
    
    useEffect(() => {
        const dataBookmark = JSON.parse(localStorage.getItem("bookmark"))
        if (dataBookmark && dataBookmark.includes(el.id)) {
            setShow(false)
        }
    }, [show])
    return (
        <>
            <div className="border shadow-inner mt-2 rounded-xl py-2 w-full lg:w-72">
                <div className="flex flex-row h-[80%] lg:flex-col lg:">
                    <div className="w-full lg:w-full text-[#1c1a4e] text-left p-2 space-y-1">
                        <div className="transition-all duration-100">
                            <div onClick={handleBookmark} className="absolute bg-[#1c1a4e] p-2 mt-2 ml-4 border-2 rounded-xl cursor-pointer">
                                <FaBookmark className={" text-xl w-4 h-4 " + (show ? "text-white" : "text-yellow-400")} />
                            </div>
                            <img src={el.cover_url} className="rounded-xl mb-2" />
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
