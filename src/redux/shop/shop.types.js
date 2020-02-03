import { ShopActionTypes } from './shop.action'
import { firestore, collectionDocumentTransformation } from '../../components/firebase/firebase.utils'

export const updateCollections = collectionmaps =>( {
    type: ShopActionTypes.UPDATE_COLLECTION_ITEMS,
    payload: collectionmaps
})

export const fetchCollectionStart = () =>( {
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionSuccess = collectionmaps => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionmaps
}) 

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
}) 

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionStart())

        collectionRef.get().then(snapshot => {
             const collectionMap = collectionDocumentTransformation(snapshot)             
             dispatch(fetchCollectionSuccess(collectionMap))
        })
        .catch(error => dispatch(fetchCollectionFailure(error.message)))
    }
}
