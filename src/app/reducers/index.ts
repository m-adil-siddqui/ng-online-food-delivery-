import {ActionReducerMap, createSelector} from "@ngrx/store"
import * as fromCatReducer from "./category-reducer"
import * as fromProductReducer from "./product-reducer"

export interface RootReducerState{
    categories: fromCatReducer.CategoryReducerState;
    products  : fromProductReducer.ProductReducerState
}


export const rootReducer : ActionReducerMap<RootReducerState> = {
    categories : fromCatReducer.categoryReducer,
    products   : fromProductReducer.productReducer
}

export const getCategoriesState = (state: RootReducerState) => state.categories;

export const getCatLoading  = createSelector(getCategoriesState, fromCatReducer.getLoading);
export const getCatLoaded   = createSelector(getCategoriesState, fromCatReducer.getLoaded); 
export const getCats  = createSelector(getCategoriesState, fromCatReducer.getCategories); 
export const getCatsError  = createSelector(getCategoriesState, fromCatReducer.getCatError); 


export const getProductState = (state:RootReducerState) => state.products;
export const getProductLoading = createSelector(getProductState, fromProductReducer.productLoading)
export const getProductLoaded  = createSelector(getProductState, fromProductReducer.productLoaded)
export const getProductError   = createSelector(getProductState, fromProductReducer.productError)
export const getProducts       = createSelector(getProductState, fromProductReducer.productsList)
