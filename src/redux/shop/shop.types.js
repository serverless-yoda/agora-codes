import { ShopActionTypes } from './shop.action'

export const updateCollections = collectionmaps =>( {
    type: ShopActionTypes.UPDATE_COLLECTION_ITEMS,
    payload: collectionmaps
})
