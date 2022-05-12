import React from 'react'
import "../pages/home/Home.css"
import { BsSearch } from "react-icons/bs";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import {Link} from "react-router-dom";
import "./Topfold.css"
import { useDispatch } from 'react-redux';
import { searchExpense } from '../Redux/action';

export default function Topfold() {
    const [query, setQuery] = useState("")
    const dispatch = useDispatch();
   
  return (
    <div className='topfold'>
        {
            window.location.pathname == "/" ? (<div className='home-topfold'>
            <div className='searchbar'>
        <BsSearch/>
           
            <input type="text" placeholder="Search For Your Expenses..." value = {query} onChange={(e) =>{
                setQuery(e.target.value)
                dispatch(searchExpense(e.target.value))
            }}/>
             </div>
             <Link to = "/addExpenses">
             <div className='add-button'>
            <FaPlus/>
            <label htmlFor="">Add</label>
            </div>
             </Link>
          
        </div>) : (
            <div className='add-topfold'> 
            <Link to = '/'>
            <div className='add-topfold-button'>
            <MdArrowBackIos/>
            <label htmlFor="">Back</label>
            </div>
            </Link>
         
            <Link to = '/'>
            <div className='add-topfold-button'>
            <MdOutlineCancel/>
            <label htmlFor="">Cancel</label>
            </div>
            </Link>
            
            </div>
        )
        }

    </div>
  )
}
