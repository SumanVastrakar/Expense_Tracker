import React, { useState } from 'react'
import "./AddForm.css"
import { RiArrowDownFill } from "react-icons/ri";
import { categories } from '../constants/AddExpense';
import { FaTelegramPlane } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addExpense } from '../../Redux/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './SuccessModal';
import Card from '../Expenselist/Card';

export default function AddForm() {
  const cat = categories
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false)

  const [categoryOpen, setcategoryOpen] = useState(false)
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setcategory] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleAmount = (e) => {
    const value = parseFloat(e.target.value)
    if (isNaN(value)) return setAmount("")

    setAmount(e.target.value)
  }

  const handleCategory = (category) => {
    setcategory(category)
    setcategoryOpen(false)
    console.log(category);

  }

  const handleSubmit = () =>{
if( title === "" || amount === "" || !category){
  const notify = () => toast("Enter Valid Data");
notify()
  return;
}
const data = {
  title,
  amount,
  category,
  createdAt : new Date(),
};
<Card item={data}/>
dispatch(addExpense(data))
setModalOpen(true);

  }

   return (
    <div className='add-form'>
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
<SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
      <div className='form-item'>
        <label htmlFor="">Title</label>
        <input type="text" placeholder='Give A Name To Your Expenditure' value={title} onChange={(e) => { handleTitle(e) }} />
      </div>
      <div className='form-item'>
        <label htmlFor="">Amount ₹</label>
        <input type="Number" placeholder='Enter Amount' className="amount-input" value={amount} onChange={(e) => { handleAmount(e) }} />
      </div>
      <div className="category-container-parent">
        <div className='category'>
          <div className='category-dropdown' onClick={() => {
            setcategoryOpen(!categoryOpen)
            // console.log(categoryOpen)
          }
          }
          >
            <label htmlFor="">{category  ? category.title : "Category"}</label>
            <RiArrowDownFill />
          </div>
          {
            categoryOpen ? (<div className='category-container'>
              {

                cat.map((e) => (
                  <div className='category-item' style={{ borderRight: `5px solid ${e.color}` }} key={e.id} onClick={() => handleCategory(e)}>
                    {console.log("mappinfg", categoryOpen)}
                    <label>{e.title}</label>
                    {/* <label>{e.icon}</label> */}
                    <img src={e.icon} alt="" />
                  </div>
                ))
              }
            </div>) :("")
          }
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
        <FaTelegramPlane style={{marginRight:"5px", marginTop:"3px"}}/>
          <label htmlFor="">Add Item</label>
    
        </div>
    
      </div>
    </div>
  )
}
