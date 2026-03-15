import React from 'react'
import { FaShopify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {FiShoppingCart } from "react-icons/fi";
import { Link, Links } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import './Nav.css'
const Nav = () => {
    let dispatch = useDispatch()
    let items = useSelector(state=>state)
    console.log(items)
  return (
    <div className='nav'>
        <div className="top-nav">
            <Link to= '/'><div className="logo">
                <span>ClickNCart</span>
                <FaShopify />
                </div></Link>
           
                    <form className='search-box'>
                        <input type="text" placeholder='Search Items...' />
                        <button><FaSearch /></button>
                    </form>
                    <Link to= '/cart'><div className='cart-box'>
                        <FiShoppingCart/>
                        <span>{items.cart.length}</span>
                 
                </div>
                </Link>
        </div>
        <div className="bottom-nav">
            <ul>
               <Link to="/"> <li>Home</li> </Link>
                <Link to='/shop'><li>Shop</li></Link>
                <Link to='/cart'><li>Cart</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </div>
      
    </div>
  )
}

export default Nav
