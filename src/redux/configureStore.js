import { createStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter";

const reducer = combineReducers({
    counter: counterReducer
})

const store = createStore(reducer)
export default store;