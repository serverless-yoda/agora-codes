const addItemToCart = (cartItems, cartItemToAdd) => {
    const exist = cartItems.find(cart => cart.id === cartItemToAdd.id)

    if(exist) {
        return cartItems.map(cart => 
            cart.id === cartItemToAdd.id 
            ? {...cart, quantity: cart.quantity + 1}
            : cart
        )
    }

    return [...cartItems,
        {
            ...cartItemToAdd,
            quantity: 1
        }
    ]
}

export default addItemToCart