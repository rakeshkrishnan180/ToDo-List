import React, { useState } from 'react'
import Notification from '../icons/Notification'
import TodoCard from '../common/Card/TodoCard';
import Form from '../common/Form/Form';
import Button from '../common/Button/Button';


const Home = () => {
  const  [displayModal, setDisplayModal] =  useState(false);
  const [form, setForm] = useState([]);
  const [time, setTime] = useState( new Date().getHours())

   const onModalDisplay =()=>{

    setDisplayModal(true)

   };

   const onModalHide = ()=>{

    setDisplayModal(false)

   };

   const onSubmitFrom = (formDetails)=>{

    setForm((prev)=>[...prev,formDetails])
   }

   const handleDelete = (selectedItem)=>{

    setForm((prev)=> prev.filter((item)=> item.id !== selectedItem))
   }

  
    if(time < 12) setTime("Good morning🌞");
    else if(time < 15) setTime("Good Afternoon☀️");
    else if(time < 22) setTime("Good Evening 🌇");
    else if(time > 22) setTime("😴Time to sleep");
  

  return (
    <div className='home_main'>
      <div className="container">
      <div className="header">
        <div className="logo_wrapper">
          <h1>RK</h1>
        </div>
        <div className="notification_wrapper">

        <Notification />

        </div>
      </div>

      <div className="main_block">
        <div className="title_block">
          <div className="left">
          <span>{time}</span> <span>Rakesh</span>
          <h1 className='main_title'>You have {form.length} {form.length > 1 ? "Projects" : "Project"}</h1>
          </div>
          <div className="right">
            <Button  onClick={onModalDisplay}>+ Add New</Button>
          </div>
          </div>
        <div className="card_block">
      
        { form.map(data=>(<TodoCard formdata={data} key={data.id} onDeleteCard = {handleDelete} /> )) }

        </div>
        {
          displayModal && <Form onModalHide = {onModalHide} onformDetails = {onSubmitFrom}/>
        }
      </div>
      </div>

    </div>
  )
}

export default Home
