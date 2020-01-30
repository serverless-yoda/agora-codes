import SHOP_DATA from './shops.data'
import { ShopActionTypes } from './shop.action'

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.UPDATE_COLLECTION_ITEMS:
            return {
                ...state,
                collections: action.payload
            }
        default: return state
    }
}

export default shopReducer