import React from 'react'
import Modal from 'react-modal';
import "./SuccessModal.css"
import { FcHome } from "react-icons/fc";
import { Link } from 'react-router-dom';

export default function SuccessModal({modalOpen, setModalOpen}) {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgrounColor : "rgb(136,176,75)",
         
        
        },
      };
  return (
  
    <div>
      <Modal isOpen={modalOpen} style = {customStyles} >
<div className='modal-inner'>
    <label htmlFor="">Expense Added Successfully</label>
    <img className="added-image" src="https://cdn.dribbble.com/users/1238709/screenshots/4069900/success_celebration_800x600.gif" alt="" />
    <Link to= "/">
    <div clsassName="take-home-button">
        <FcHome/>
        HOME
    </div>
    </Link>


</div>
      </Modal>
    </div>
  )
}
