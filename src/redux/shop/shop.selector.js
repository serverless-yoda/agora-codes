import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectonsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(item => collections[item]) : []
)
export const selectShopSingleCollection = collectionIdFromParam => createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionIdFromParam]
 : null)


export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)