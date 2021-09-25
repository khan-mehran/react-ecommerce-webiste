import  userReducer  from "./userReducer";
import womenReducer from './womenReducer'
import { combineReducers } from "redux";
import electronicReducer from "./electronicReducer";
import jeweleryReducer from './jeweleryReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
    userReducer,
    womenReducer,
    electronicReducer,
    jeweleryReducer,
    categoryReducer
})

export default rootReducer