import { combineReducers } from "redux"
import dataReducer from "./reducer"

const rootReducer = combineReducers({
    categories: dataReducer,
})

export default rootReducer