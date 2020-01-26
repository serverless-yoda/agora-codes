import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const CheckoutStripeButton = ({price}) => {
    const priceIncents = price * 100;
    const publishKey = 'pk_test_YUpgc3FGOen54pKRIGtxC4Wr00MpFfEXVO'

    const onToken = token => {
        console.log(token)
        alert("Payment Received")
    }
    return (
        <StripeCheckout 
            label= "Pay Now"
            name="Agora Online"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total price is $${price}`}
            amount={priceIncents}
            panalLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
        />
    )
}

export default CheckoutStripeButton