import React from "react";
import CardBook from "./CardBook";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBooks } from "../store/actions/action";
import { useParams } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";

function BookContent() {
    const dispatch = useDispatch();
    const { categoryId, name } = useParams();
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage, setPerPage] = useState(10);

    const { books } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchAllBooks(categoryId, currentPage, perPage));
    }, []);
    return (
        <>
            <div className="bg-white w-full p-2 h-full">
                {/* <Header /> */}
                <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-3 lg:items-center space-y-1">
                <div className="flex items-center justify-center h-10">
                    <div className="border-l-2 border-y-2 border-yellow-400 h-full pl-2">
                        <FaSistrix className="text-[#1c1a4e] font-bold text-xl h-full" />
                    </div>
                    <form className="w-full text-white">
                        <input
                            type="text"
                            className="lg:w-40 w-full h-10 px-1 border-y-2 border-r-2 border-yellow-400 text-[#1c1a4e] focus:outline-none"
                            placeholder="Find Book"
                        />
                    </form>
                </div>
            </div>
                <div className="flex flex-col p-8 lg:flex lg:flex-row justify-center lg:flex-wrap w-full gap-3 lg:pt-1">
                    {books.map((el, i) => {
                        return <CardBook key={i} el={el} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default BookContent;
