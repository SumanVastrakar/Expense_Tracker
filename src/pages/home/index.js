import React from 'react'
import ExpenseList from '../../components/Expenselist/ExpenseList'
import Topfold from '../../components/Topfold'
import "./Home.css"

export default function Home() {
  return (
    <div className='home'>
      <div>
<Topfold/>
      </div>
      <div>
<ExpenseList/>
      </div>
    </div>
  )
}

//reducers

  //storee
 