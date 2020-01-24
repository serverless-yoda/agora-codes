import React from 'react'

import './collection-item.style.scss'
import FormButton from '../form-button/form-button.component'

const CollectionItem = ({id,name,price,imageUrl}) => (
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

        <FormButton inverted>Add to cart</FormButton>
        
    </div>
)

export default CollectionItem