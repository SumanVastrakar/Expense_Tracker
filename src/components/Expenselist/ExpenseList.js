import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Card from "./Card";
import "./ExpenseList.css";
const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  console.log("list",list)
  console.log("query", query);
 
  
  const filteredList = list.filter((item) => item.title.includes(query));
  console.log("filteredList-",filteredList)

  const notifySuccess = () => toast.success("Expense Deleted!");
  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((item) => (
          <Card item={item} notifySuccess={notifySuccess} />
        ))
      ) : (
        <div className="empty-state">
          <img
            src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-cute-disappointed-shopping-bag-flat-thin-line-vector-id841884438?k=20&m=841884438&s=612x612&w=0&h=yi6txQa52uAXEaKRLuijrmzYAT8GQrrv8NhHSD7lMOE="
            alt="No Expenses"
            className="empty-image"
          />
          <label>Uh Oh! Your expense list is empty.</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;