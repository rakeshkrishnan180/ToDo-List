import React from 'react'

const MenuCard = ({cardData}) => {
  console.log(cardData);
  
  return (
    <div className='menucard_wrapper'>
      <img src={cardData.itemImage} alt={cardData.title}/>
      <p className="title">{cardData.title}</p>
    </div>
  )
}

export default MenuCard
