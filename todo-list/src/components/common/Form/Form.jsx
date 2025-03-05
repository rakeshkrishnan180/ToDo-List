import React, { useState } from 'react'
import close from "../../../assets/form-close.png"
import Button from '../Button/Button'

const Form = ({onModalHide,onformDetails}) => {

  const [taskFor, setTaskFor] = useState("Office");
  const [priority, setPriority] = useState("High");
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  const handleSubmit = (e)=>{

    e.preventDefault();

    if(!title && !description) return;

    const id = new Date().getSeconds();
    

    const formDetails = {

      taskFor,
      priority,
      title,
      description,
      id
    }

    onformDetails(formDetails)
    onModalHide()

  }

  
  return (
    <div className="bg_overlay">
    <div className='form_wrapper'>
        <div className="form_header"><button onClick={onModalHide}><img  src={close}/></button></div>
      <form onSubmit={handleSubmit}>
        <div className="select_wrapper">
            <div>
            <label className='label'>Task for</label>
            <select
            value={taskFor}
            onChange={(e)=>setTaskFor(e.target.value)}>
                <optgroup>
                <option>Office</option>
                <option>Freelance</option>
                <option>Other</option>
                </optgroup>
            </select>
            </div>
            <div>
            <label className='label'>Priority</label>
            <select
            value={priority}
            onChange={(e)=>setPriority(e.target.value)}>
                <option>High</option>
                <option>Normal</option>
                <option>Low</option>
            </select>
            </div>
        </div>
        <label className='label'>Title</label>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='enter your title...'/>

        <label className='label'>Description</label>
        <textarea type='text' cols={50} rows={4} value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        <div className="btn-wrapper">
        <Button>Submit</Button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Form
