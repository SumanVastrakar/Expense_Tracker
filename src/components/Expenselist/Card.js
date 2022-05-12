import  {useDispatch} from 'react-redux'
import "./Card.css"
import moment from 'moment';
import { BsFillTrashFill } from "react-icons/bs";


import { deleteExpense } from "../../Redux/action"
// const item = categories;
export default function Card({item,notifySuccess}) {
  const time =moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  console.log("item received-", item)
  
  const handleDelete = () =>{
    console.log("item deleted-", item)
   dispatch(deleteExpense(item))
   notifySuccess();
  }

  return (
    <div className='card' style={{borderRight :`6px solid ${item.category.color}`}}>
      <div className='card-image-container'>
        <img className='card-image' src={item.category.icon} alt="" />

      </div>
      <div className='card-info'>
<label className="card-title" htmlFor="">{item.title}</label>
<label className = "card-time" htmlFor="">{time}</label>
      </div>
      <div className='card-right'>
<div>
  <label htmlFor="" className='card-amount'> ₹ {item.amount}</label>

</div>
<div className='delete-icon' onClick={handleDelete}>
  <BsFillTrashFill/>
</div>
      </div>
    
    </div>
  )
}
