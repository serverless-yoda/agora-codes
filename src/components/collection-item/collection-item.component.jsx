import React from 'react'

import './collection-item.style.scss'
import FormButton from '../form-button/form-button.component'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'

const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item

    return (
        <div className='collection-item'>
                <div
                    className='image'
                    style={{
                        backgroundImage: `url(${imageUrl})`
                    }}
                />
                    
                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>

                <FormButton inverted onClick={() => addItem(item)}>Add to cart</FormButton>
                
            </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem)