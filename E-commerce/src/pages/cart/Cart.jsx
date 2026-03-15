import React, { useState } from 'react'
import './Cart.css'
import CartCard from '../../components/CartCard/CartCard'
import { useSelector } from 'react-redux'
import ec from '../../assets/emptycart.png'

const Cart = () => {
  let cartItems = useSelector((state) => state.cart)
  let total = cartItems.reduce((a,b)=> a+b.price ,0)

  return (
    <div className='cart'>
      {cartItems.length <= 0 ?
        <div className='empty-cart'>
          <img src={ec} alt="" />
          <h1>Empty Cart</h1>
        </div>
        :
        <div className="cartCard-section">
          {cartItems.map((item) => (
            <CartCard name={item.name} price={item.price} image={item.image} id={item.id} />
          ))}

          <div className="price-section">
            <span>Total Products - {cartItems.length}</span>
            <span>Total Price  - {total}</span>

          </div>
        </div>
      }

    </div>
  )
}

export default Cart
