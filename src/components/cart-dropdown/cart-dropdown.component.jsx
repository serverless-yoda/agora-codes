import React from 'react'
import FormButton from '../form-button/form-button.component'
import './cart-dropdown.style.scss'
import CartItem from '../cart-item/cart-item.componet'
import { connect } from 'react-redux'
import {selectCartItems } from '../../redux/cart/cart.selector'
import {toggleCartHidden } from '../../redux/cart/cart.action'
import { withRouter } from 'react-router-dom'

const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length
            ?
            (cartItems.map(item => <CartItem key={item.id} item={item}/>))
            :
            <span className="empty-message">Your cart is empty</span>
        }
        </div>
        <FormButton onClick={
            () => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }
        }>CHECKOUT</FormButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})
export default withRouter(connect(mapStateToProps)(CartDropdown))