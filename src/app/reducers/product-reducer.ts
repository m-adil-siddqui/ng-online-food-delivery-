import { Action } from "../actions";
import { PRODUCT_LIST_ERROR, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../actions/product-actions";
import { Product } from "../models/product";


//reducer type
export interface ProductReducerState{
    loading: boolean;
    error  : boolean;
    loaded : boolean;
    products: Product[]
}


//reducer initial state
const initialState: ProductReducerState = {
    loading : false,
    error   : false,
    loaded  : false,
    products: []
}


export function productReducer(state = initialState, action: Action):ProductReducerState{
    switch(action.type){
        case PRODUCT_LIST_REQUEST:{
            return {...state, loading:true};
        }

        case PRODUCT_LIST_ERROR:{
            return {...state, loading: false, error: true};
        }

        case PRODUCT_LIST_SUCCESS:{
            const updatedData = state.products.concat(action.payload.data)
            return {...state, loaded:true, loading:false, error:false, products:updatedData}
        }

        default:{
            return state;
        }

    }
}


export const productLoading = (state:ProductReducerState) => state.loading;
export const productLoaded  = (state:ProductReducerState) => state.loaded;
export const productError   = (state:ProductReducerState) => state.error;
export const productsList   = (state:ProductReducerState) => state.products;



