import React from 'react'
import MenuCard from '../../../Common/Components/MenuCard/MenuCard'

const menucardData = [
  {
    title:"Burger",
    itemImage:"https://img.freepik.com/premium-photo/maxi-hamburger-double-cheeseburger-with-flying-ingredients-isolated-white_158023-174.jpg?ga=GA1.1.90735953.1747921456&semt=ais_hybrid&w=740",
    id:1,
  },
  {
    title:"Pizza",
    itemImage:"https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg?ga=GA1.1.90735953.1747921456&semt=ais_hybrid&w=740",
    id:2,
  },
  {
    title:"Cakes",
    itemImage:"https://img.freepik.com/premium-photo/isolated-whoopie-pie-cake-with-chocolate-strawberries-white-surface_219193-5023.jpg?ga=GA1.1.90735953.1747921456&semt=ais_hybrid&w=740",
    id:3,
  },
  {
    title:"Sandwich",
    itemImage:"https://img.freepik.com/premium-photo/view-club-sandwich-with-bread-tomato-egg-various-vegetables-white-background_669966-7092.jpg?ga=GA1.1.90735953.1747921456&semt=ais_hybrid&w=740",
    id:4,
  },
  {
    title:"Momos",
    itemImage:"https://img.freepik.com/premium-photo/plate-tasty-momos-with-white-background_1111504-12932.jpg?ga=GA1.1.90735953.1747921456&semt=ais_hybrid&w=740",
    id:3,
  },
  {
    title:"Noodles",
    itemImage:"https://img.freepik.com/premium-photo/wood-dish-with-chinese-food_95419-6915.jpg?ga=GA1.1.90735953.1747921456&semt=ais_hybrid&w=740",
    id:3,
  },
  {
    title:"Shakes",
    itemImage:"https://img.freepik.com/premium-photo/tasty-chari-cherry-choco-shake-isolated-white-background_787273-35865.jpg?ga=GA1.1.90735953.1747921456&semt=ais_hybrid&w=740",
    id:3,
  },
]

const FoodCategory = () => {
  return (
    <div>
        <div className='category_list_block'>
            <div className="card_top_list_wrapper">
                {
                    menucardData.map((cardData)=>(
                        <MenuCard cardData = {cardData} key={cardData.id} />
                    ))
                }
            </div>
        
        </div>
    </div>
  )
}

export default FoodCategory
