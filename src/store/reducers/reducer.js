import { FETCH_CATEGORY, FETCH_BOOK } from "../actions/actionType";

const initialState = {
    categories: [],
    books: [],
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
        default:
            return state;
    }
}

export default dataReducer;
