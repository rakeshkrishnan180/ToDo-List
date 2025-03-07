import React, { useState } from 'react'
import tick from '../../../assets/check-1.png';
import deleteIcon from "../../../assets/delete.png";
import editIcon from "../../../assets/compose.png";
import closeIcon from "../../../assets/close.png";

const TodoCard = ({formdata,onDeleteCard,onEdit,onDisplayModalHide}) => {
  
  const [status, setStatus] = useState(false);
  
  return (
    <div className={`card_main ${formdata.priority === "High" && "high" || formdata.priority === "Normal" && "normal" || formdata.priority === "Low" && "low"}`}>
      <div className="status_block">
        <div className="icon_wrapper" onClick={()=>setStatus((prev)=> !prev)}>
        {status && <img src={tick}/>}
        </div>
      </div>
      <div className="card_header">
        <span className="category_label">{formdata.taskFor}</span>
        <div className="priority_label"><span className='icon'></span><span className='text'>{formdata.priority === "High" && "🔥" || formdata.priority === "Normal" && "👍" || formdata.priority === "Low" && "☺️"}{formdata.priority}</span></div>
      </div>
      <div className="content_wrapper">
        <h3 className='task_title'>{formdata.title}</h3>
        <div className="date_wrapper">
        <span></span> <span className="date">july 29, 2023</span>
        </div>
        <div className="short_description">
            <p>{formdata.description}</p>
        </div>
      </div>

      <ul className="action_wrapper">
        <li><button><img src={deleteIcon} onClick={()=>onDeleteCard(formdata.id)}/></button></li>
        <li><button onClick={()=>(onEdit(formdata.id),onDisplayModalHide(true))}><img src={editIcon} /></button></li>
      </ul>
    </div>
  )
}

export default TodoCard
