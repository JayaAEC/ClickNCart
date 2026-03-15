import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import image1 from "../../assets/image1.jpg"
import './CartCard.css'
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';

const CartCard = ({ name, price, image, id }) => {
    let dispatch = useDispatch()
    return (
        <div className='Cartcard'>
            <div className="left-card">
                <img src={image} alt={name} />
                <div className="name-price">
                    <span>{name}</span>
                    <span>Rs {price} /-</span>
                </div>
            </div>
            <div className="right-card">
                <button onClick={() => {
                    dispatch(RemoveItem(id))
                    alert("Product Removed Successfully !")
                }}>Remove <RiDeleteBinLine /></button>
            </div>


        </div>
    )
}

export default CartCard
