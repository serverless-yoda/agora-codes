import React from 'react'
import FormButton from '../form-button/form-button.component'
import './cart-dropdown.style.scss'

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items"/>
        <FormButton>CHECKOUT</FormButton>
    </div>
)

export default CartDropdown