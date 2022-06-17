import React from "react";
import Header from "./Header";
import CardCategory from "./CardCategory";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../store/actions/action";

function MainContent() {
    const dispatch = useDispatch();

    const { categories } = useSelector((state) => state.categories);
    // const [bookCat, bookCat] = useState(0);

    useEffect(() => {
        dispatch(fetchAllCategories());
    }, []);
    return (
        <>
            <div className="bg-white w-full p-2 h-full">
                <Header />
                <div className="flex flex-col p-8 lg:flex lg:flex-row justify-left lg:flex-wrap w-full gap-3 lg:pt-1">
                    {categories.map((cat, i) => {
                        return <CardCategory key={i} cat={cat} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default MainContent;
