import React from 'react'

import { Route } from 'react-router-dom'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import Collection from '../../components/collection/collection.component'

const ShopPage = ({match}) => {
    console.log(match)
    return (
        <div className='shop-page'>
                <Route exact path={`${match.url}`} component={CollectionPreview} />
                <Route path={`${match.url}/:collectionId`} component={ Collection} />       
            </div>
    )
}
    


export default ShopPage