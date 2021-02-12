import React from 'react'
import './Header.css'
import Logo from './amazon_logo.png'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'


function Header() {
    const [{ basket}] = useStateValue();

    return (
        
        <div className='header'>
            {/*LOGO*/}
            <Link to='/'>
            <img className='header__logo' src={Logo} alt='amazon logo'/>
            </Link>
            
            {/*SEARCH BAR*/}
            <div className='header__search'>
                <input className='header__search__input' type='text'>
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
            <Link to='/checkout'>
                <div className='option__shoppingBasket'>
                    <ShoppingBasket className='basket__icon' />
                    <span className='header__shoppingBasketCount'>
                        {basket?.lenght}    
                    </span> 
                </div>
            </Link>              
            </div>
        </div>
    
    )
}

export default Header
