import React from 'react'

import { Route } from 'react-router-dom'

import Collection from '../../components/collection/collection.component'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
//import {firestore, collectionDocumentTransformation } from '../../components/firebase/firebase.utils'

import { connect } from 'react-redux'
import { selectIsCollectionFetching,selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'

//import { updateCollections } from '../../redux/shop/shop.types'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { fetchCollectionStartAsync } from '../../redux/shop/shop.types'
import { createStructuredSelector } from 'reselect'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection)

class ShopPage extends React.Component {
   
    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props;
        fetchCollectionStartAsync()

    }
    
    render() { 
        const { match,isSelectIsCollectionFetching,isCollectionsLoaded } = this.props
        console.log(this.props)

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) =>              <CollectionOverviewWithSpinner 
                        isloading={isSelectIsCollectionFetching } 
                        {...props}/>} 
                    />
                <Route path={`${match.path}/:collectionId`} 
                    render={(props) =>                  
                        <CollectionPageWithSpinner 
                    isloading={!isCollectionsLoaded } 
                    {...props}/>} 
                
                />       
            </div>
        )
    }    
}

const mapStateToProps = createStructuredSelector({
    isSelectIsCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage)