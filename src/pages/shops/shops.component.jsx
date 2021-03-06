import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollectionStartAsync } from '../../redux/shop/shop.types'
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container'
import CollectionPageContainer from '../../components/collection/collection.container'




class ShopPage extends React.Component {
   
    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props;
        fetchCollectionStartAsync()

    }
    
    render() { 
        const { match} = this.props
        console.log(this.props)

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
                    
                <Route path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}/> 
                
                 
            </div>
        )
    }    
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(null,mapDispatchToProps)(ShopPage)