
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
import Collection from './collection.component'

import { compose } from 'redux'
import WithSpinner from '../with-spinner/with-spinner.component'


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)

export default CollectionPageContainer
