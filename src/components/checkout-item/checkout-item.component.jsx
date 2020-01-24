import React from 'react'
import './checkout-item.style.scss'
import { connect } from 'react-redux'
import { clearItem } from '../../redux/cart/cart.action'

const CheckoutItemPage = ({ cartItem, clearItem}) => {
    const {name,imageUrl,price, quantity} = cartItem
    return (
           <div className="checkout-item">
        <div className="image-container">
            <img alt="item" src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={(item) => clearItem(cartItem)}>
            &#10005;
        </div>

        </div> 
    )

}

const mapDispatchToState = dispatch => ({
    clearItem: item => dispatch(clearItem(item))
})
export default connect(null,mapDispatchToState)(CheckoutItemPage)