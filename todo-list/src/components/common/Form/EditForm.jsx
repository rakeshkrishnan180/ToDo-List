import React, { useState } from 'react';
import close from "../../../assets/form-close.png"
import Button from '../Button/Button'

const EditForm = ({onEditForm,onEditFunction,onEditModalHide}) => {
    const [editTaskFor, setEditTaskFor] = useState("Office");
    const [EditPriority, setEditPriority] = useState("High");
    const [editTitle,setEditTitle] = useState("");
    const [editDescription,setEditDescription] = useState("");

const handleEdit = ()=>{

}

    const handleOnSubmit = (e)=>{

      e.preventDefault();

      // onEditFunction((prev)=>({...prev,l}))
     
    }
  return (
    <div className="bg_overlay">
    <div className='form_wrapper'>
        <div className="form_header"><button onClick={()=>onEditModalHide(false)}><img  src={close}/></button></div>
      <form onSubmit={handleOnSubmit}>
        <div className="select_wrapper">
            <div>
            <label className='label'>Task for</label>
            <select
            value={onEditForm.taskFor}
            onChange={(e)=>onEditFunction(e.target.value)}>
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
            value={onEditForm.priority}
            onChange={(e)=>onEditFunction(e.target.value)}>
                <option>High</option>
                <option>Normal</option>
                <option>Low</option>
            </select>
            </div>
        </div>
        <label className='label'>Title</label>
        <input type='text' value={onEditForm.title} onChange={(e)=>onEditFunction(e.target.value)} placeholder='enter your title...'/>

        <label className='label'>Description</label>
        <textarea type='text' cols={50} rows={4} value={onEditForm.description} onChange={(e)=>onEditFunction(e.target.value)}></textarea>
        <div className="btn-wrapper">
        <Button>Submit</Button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default EditForm
