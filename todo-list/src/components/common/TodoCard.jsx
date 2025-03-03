import React from 'react'

const TodoCard = () => {
  return (
    <div className='card_main'>
      <div className="card_header">
        <span className="category_label">Office</span>
        <div className="priority_label"><span className='icon'></span><span className='text'>High</span></div>
      </div>
      <div className="content_wrapper">
        <h3 className='task_title'>Creating Design System</h3>
        <div className="date_wrapper">
        <span></span> <span className="date">july 29, 2023</span>
        </div>
        <div className="short_description">
            <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces </p>
        </div>
      </div>

      <ul className="action_wrapper">
        <li><button>D</button></li>
        <li><button>C</button></li>
      </ul>
    </div>
  )
}

export default TodoCard
