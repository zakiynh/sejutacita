import React from "react";
import CardBook from "./CardBook";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBooks, fetchBookPage } from "../store/actions/action";
import { useParams } from "react-router-dom";
import { FaSistrix, FaBookmark } from "react-icons/fa";
import ReactPaginate from "react-paginate";

function BookContent() {
    const dispatch = useDispatch();
    const { categoryId, name } = useParams();
    const [currentPage, setCurrentPage] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [total, setTotal] = useState([]);

    const { books, booksCat } = useSelector((state) => state.categories);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
        const newPage = data.selected;
        dispatch(fetchAllBooks(categoryId, newPage, perPage));
    };

    const pageCount = Math.ceil(total.length / perPage);

    useEffect(() => {
        dispatch(fetchAllBooks(categoryId, currentPage, perPage));
        dispatch(fetchBookPage(categoryId))
        .then((data) => {
            setTotal(data);
        });
    }, [dispatch]);

    if (!books) {
        return <div>Loading...</div>;
    }
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
                <div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=" >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        pageCount={pageCount}
                        previousLabel="< "
                        renderOnZeroPageCount={null}
                        containerClassName=" mx-4 p-4 border flex justify-center items-center align-center my-auto"
                        pageClassName="border p-2 w-10 rounded-full"
                        pageLinkClassName="page-link"
                        activeClassName="bg-yellow-400"
                        previousClassName="my-auto font-extrabold mr-2"
                        nextClassName="my-auto font-extrabold ml-2"
                        previousLinkClassName="page-link"
                        breakClassName="my-auto"
                        breakLinkClassName="page-link"
                        className="flex justify-center"
                    />
                </div>
            </div>
        </>
    );
}

export default BookContent;
