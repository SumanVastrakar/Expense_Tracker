import { legacy_createStore as createStore, combineReducers } from "redux";
import { expenseReducer } from "./reducers";

const reducer = combineReducers({
    expenses : expenseReducer,
})
 const initialState = {};
 export const store = createStore( reducer, initialState)