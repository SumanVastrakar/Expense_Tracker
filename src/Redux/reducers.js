import { ADD_EXPENSES, DELETE_EXPENSES, SEARCH_EXPENSE } from "./action";

const initialList = () =>{
    const list = localStorage.getItem("expense-list")
    let expense = [];
    if(list){
        expense = JSON.parse(list)
    }
    return expense;
}
const initialState = {
    expenseList : initialList(),
    query : "",
    }
    export const expenseReducer = (state = initialState, action) => {
    
        switch(action.type){
            case ADD_EXPENSES : {
                localStorage.setItem("expense-list",JSON.stringify( [...state.expenseList, action.payload]))
                return {...state, expenseList : [...state.expenseList, action.payload]}
            }
            case DELETE_EXPENSES : {
                const {data} = action;
           
                const updatedList = state.expenseList.filter(e => e.createdAt !== data.createdAt);
                localStorage.setItem("expense-list", JSON.stringify(updatedList))

                return {
                    ...state,
                    expenseList : updatedList,
                }
            }
            case SEARCH_EXPENSE : {
                const {query} = action
                return {
                    ...state,
                    query,
                }
                }
            
            default : return state;
        }
    }
  