import axios from "axios";
import { FETCH_CATEGORY, FETCH_BOOK } from "./actionType";

export const fetchCategory = (payload) => {
    return {
        type: FETCH_CATEGORY,
        payload
    }
}

export const fetchBook = (payload) => {
    return {
        type: FETCH_BOOK,
        payload
    }
}

export const fetchAllCategories =  () => {
    return async (dispatch) => {
        try {
            const response = await fetch("/fee-assessment-categories");
            const data = await response.clone().json();
            dispatch(fetchCategory(data));
        } catch(error) {
            console.log(error)
        }
    }
}

export const fetchAllBooks = (id, currentPage, perPage) => {
    return async (dispatch) => {
        try {
            const response = await fetch("/fee-assessment-books" + `?categoryId=${id}&page=${currentPage}&size=${perPage}`);
            const data = await response.json()
            dispatch(fetchBook(data))
        } catch(error) {
            console.log(error)
        }
    }
}