import { FETCH_CATEGORY, FETCH_BOOK, FETCH_BOOK_BY_CATEGORY, BOOKMARK } from "./actionType";

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

export const fetchTotalBooks = (payload) => {
    return {
        type: FETCH_BOOK_BY_CATEGORY,
        payload
    }
}

export const bookmark = (payload) => {
    return {
        type: BOOKMARK,
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

export const fetchBookPage = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch("/fee-assessment-books" + `?categoryId=${id}`)
            const data = await response.json()
            dispatch(fetchTotalBooks(data))
            return data
        } catch(error) {
            console.log(error)
        }
    }
}

export const doBookmark = (id) => {
    return async (dispatch, getState) => {
        try {
            const data = getState()
            return data

        } catch(error) {
            console.log(error)
        }
    }
}