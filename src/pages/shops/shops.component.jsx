import React from 'react'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop.selector'

const ShopPage = ({collections}) => (
    <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollection}) => <CollectionPreview 
                        key={id}
                        {...otherCollection} />)
                }
                
            </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})
export default connect(mapStateToProps)(ShopPage)