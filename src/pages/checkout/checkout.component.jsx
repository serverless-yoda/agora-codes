import React from 'react'
import './checkout.style.scss'

import {connect} from 'react-redux'
import {selectCartItemsTotal,selectCartItems} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'
import CheckoutItemPage from '../../components/checkout-item/checkout-item.component'
import CheckoutStripeButton from '../../components/stripe-button/stripe-button.component'

const CheckOutPage = ({cartItems,total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className='header-block'>
                <span>PRODUCT</span>
            </div>
            <div className='header-block'>
                <span>DESCRIPTION</span>
            </div>
            <div className='header-block'>
                <span>QUANTITY</span>
            </div>
            <div className='header-block'>
                <span>PRICE</span>
            </div>
            <div className='header-block'>
                <span>REMOVE</span>
            </div>
        </div>
        {
            cartItems.map(item => <CheckoutItemPage key={item.id} cartItem={item}/>)
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <div className="test-warning">
            TEST CARD: 4242-4242-4242-4242 <br/>
            EXP: 01/20 <br/>
            CVC: 123
        </div>
        <CheckoutStripeButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
 }
)
export default connect(mapStateToProps)(CheckOutPage)