import React from 'react'
import Notification from '../icons/Notification'
import TodoCard from '../common/TodoCard'

const Home = () => {
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
          <span>Good Morning</span> <span>🌞</span> <span>Rakesh</span>
          <h1 className='main_title'>You have 5 Projects</h1>
        </div>
        <div className="card_block">
       { <TodoCard />}
        </div>
      </div>
      </div>

    </div>
  )
}

export default Home
