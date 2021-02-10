import React from 'react'
import './Header.css'
import Logo from './amazon_logo.png'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'

function Header() {
    return (
        <>
        <div className='header'>
            {/*LOGO*/}
            <img className='header-logo' src={Logo} alt='amazon logo'/>

            {/*SEARCH BAR*/}
            <div className='header-search'>
                <input className='header-search-input' type='text'>
                </input>
                <SearchIcon className='header-search-icon' />
            </div>
            {/*HEADER NAV, LEFT SIDE*/}
            <div className='header-nav'>

                <div className='header-options'>
                <span className='header-option-line-one'>Hello Guest</span>
                <span className='header-option-line-two'>Sign In</span>
                </div>

                <div className='header-options'>
                    <span className='header-option-line-one'>Returns</span>
                    <span className='header-option-line-two'>& Orders</span>
                </div>

                <div className='header-options'>
                    <span className='header-option-line-one'>Your</span>
                    <span className='header-option-line-two'>Prime</span>
                </div>

                <div className='option-shoppingBasket'>
                <ShoppingBasket className='basket-icon' />
                <span className='header-shoppingBasketCount'>0</span>               
            </div>
            </div>
        </div>
        </>
    )
}

export default Header
