export const ADD_EXPENSES = "ADD_EXPENSES";
export  const DELETE_EXPENSES = "DELETE_EXPENSES"
export const SEARCH_EXPENSE = "SEARCH_EXPENSE";

//action creator
 export const addExpense = (data) =>{
    console.log(data)
 return {
     
  type : ADD_EXPENSES,
  payload : data,
 }
 }

 export const deleteExpense = (data) =>{
return {
    type : DELETE_EXPENSES,
  data
}
 }
 export const searchExpense= (query) =>{
  return {
    type :SEARCH_EXPENSE,
    query,
  }
 }