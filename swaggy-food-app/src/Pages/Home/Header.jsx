import React from 'react'
import { CiSearch } from 'react-icons/ci'


const Header = () => {
    return (
        <div className='header_wrapper'>
            <div className='container'>
                <div className="banner_area">
                    <h1 className="banner_title">Order Your Favorite Food</h1>
                    <div className="search_wrapper">
                        <span className="icon"><CiSearch /></span>
                        <input type='search' placeholder='Serach your item' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
