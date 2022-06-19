import { FETCH_CATEGORY, FETCH_BOOK, FETCH_BOOK_BY_CATEGORY } from "../actions/actionType";

const initialState = {
    categories: [],
    books: [],
    booksCat: [],
};

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORY:
            return {
                ...state,
                categories: action.payload,
            };
        case FETCH_BOOK:
            return {
                ...state,
                books: action.payload,
            };
            case FETCH_BOOK_BY_CATEGORY:
                return {
                    ...state,
                    booksCat: action.payload
                }
        default:
            return state;
    }
}

export default dataReducer;
