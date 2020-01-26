import React from 'react'

import { Route } from 'react-router-dom'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import Category from '../../components/category/category.component'

const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.url}`} component={ CollectionPreview} />
        <Route path={`${match.url}/:categoryId`} component={ Category} />       
    </div>
)

export default ShopPage