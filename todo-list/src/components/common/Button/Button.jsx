import React from 'react'

const Button = ({onClick,children}) => {
  return (
    <div>
    <button className='btn-submit' onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button
