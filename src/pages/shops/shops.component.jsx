import React from 'react'

import { Route } from 'react-router-dom'

import Collection from '../../components/collection/collection.component'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import {firestore, collectionDocumentTransformation } from '../../components/firebase/firebase.utils'

import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.types'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection)

class ShopPage extends React.Component {
   state = {
       loading: true
   }

    unsubscribeFromSnapshot = null
 
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections')
        // collectionRef.onSnapshot(async snapshot => {
        //     const collectionMap = collectionDocumentTransformation(snapshot)
        //     updateCollections(collectionMap)
        //     this.setState({loading: false})
        // }) 
        //replacement for snapshot   
        collectionRef.get().then(snapshot => {
             const collectionMap = collectionDocumentTransformation(snapshot)
             updateCollections(collectionMap)
            this.setState({loading: false})
            
        })   
    }
    
    render() { 
        const { match } = this.props
        const {loading} = this.state

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) =>              <CollectionOverviewWithSpinner 
                        isloading={ loading } 
                        {...props}/>} 
                    />
                <Route path={`${match.path}/:collectionId`} 
                    render={(props) =>                  <CollectionPageWithSpinner 
                    isloading={ loading } 
                    {...props}/>} 
                
                />       
            </div>
        )
    }    
}
    
const mapDispatchToProps = dispatch => ({
    updateCollections: collection => dispatch(updateCollections(collection))
})

export default connect(null,mapDispatchToProps)(ShopPage)