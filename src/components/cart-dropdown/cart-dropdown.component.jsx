import React from 'react'
import FormButton from '../form-button/form-button.component'
import './cart-dropdown.style.scss'
import CartItem from '../cart-item/cart-item.componet'
import { connect } from 'react-redux'
import {selectCartItems } from '../../redux/cart/cart.selector'

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.map(item => <CartItem key={item.id} item={item}/>)
        }
        </div>
        <FormButton>CHECKOUT</FormButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown)