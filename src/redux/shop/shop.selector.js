import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectonsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(item => collections[item])
)
export const selectShopSingleCollection = collectionIdFromParam => createSelector(
    [selectShopCollections],
    collections => collections[collectionIdFromParam]
)
