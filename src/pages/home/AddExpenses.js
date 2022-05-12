import React from 'react'
import AddForm from '../../components/AddForm/AddForm'
import Topfold from '../../components/Topfold'
import "./AddExpense.css"

export default function AddExpenses() {
  return (
    <div className='add-expense'>
  <Topfold/>
  <AddForm/>
    </div>
  )
}
