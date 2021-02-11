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
            <img className='header__logo' src={Logo} alt='amazon logo'/>

            {/*SEARCH BAR*/}
            <div className='header__search'>
                <input className='header__search__nput' type='text'>
                </input>
                <SearchIcon className='header__search__icon' />
            </div>
            {/*HEADER NAV, LEFT SIDE*/}
            <div className='header__nav'>

                <div className='header__options'>
                <span className='header__option__line__one'>Hello Guest</span>
                <span className='header__option__line__two'>Sign In</span>
                </div>

                <div className='header__options'>
                    <span className='header__option__line__one'>Returns</span>
                    <span className='header__option__line__two'>& Orders</span>
                </div>

                <div className='header__options'>
                    <span className='header__option__line__one'>Your</span>
                    <span className='header__option__line__two'>Prime</span>
                </div>

                <div className='option__shoppingBasket'>
                <ShoppingBasket className='basket__icon' />
                <span className='header__shoppingBasketCount'>0</span>               
            </div>
            </div>
        </div>
        </>
    )
}

export default Header
