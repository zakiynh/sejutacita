import React, { useState } from "react";
import { useEffect } from "react";
import { FaBookmark } from "react-icons/fa";

function CardBook({ el }) {
  const [show, setShow] = useState(true);

  function handleBookmark() {
    let bookmarks = [];
    const dataBookmark = JSON.parse(localStorage.getItem("bookmark"));

    if (dataBookmark) {
      bookmarks = dataBookmark;
    }
    // di tambahin data ke local storage
    const finder = bookmarks.findIndex((item) => item.id === el.id);

    if (finder > -1) {
      bookmarks.splice(finder, 1);
      localStorage.setItem("bookmark", JSON.stringify(bookmarks));
      setShow(true);
    } else {
      bookmarks.push(el);
      localStorage.setItem("bookmark", JSON.stringify(bookmarks));
      setShow(false);
    }
  }

  useEffect(() => {
    const dataBookmark = JSON.parse(localStorage.getItem("bookmark"));
    // jadi ternery if
    if (dataBookmark) {
      const finder = dataBookmark.findIndex((item) => item.id === el.id);
      finder > -1 ? setShow(false) : setShow(true);
    }
  }, [el]);
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
