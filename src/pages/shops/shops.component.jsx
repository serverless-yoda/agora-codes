import React from 'react'

import { Route } from 'react-router-dom'

import Collection from '../../components/collection/collection.component'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import {firestore, collectionDocumentTransformation } from '../../components/firebase/firebase.utils'

import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.types'

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null
 
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = collectionDocumentTransformation(snapshot)
            //console.log(collectionMap)
            updateCollections(collectionMap)
        })       
    }
    
    render() { 
        const { match } = this.props
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component = { CollectionOverview } />
                <Route path={`${match.path}/:collectionId`} component={ Collection} />       
            </div>
        )
    }    
}
    
const mapDispatchToProps = dispatch => ({
    updateCollections: collection => dispatch(updateCollections(collection))
})

export default connect(null,mapDispatchToProps)(ShopPage)