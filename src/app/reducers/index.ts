import {ActionReducerMap, createSelector} from "@ngrx/store"
import * as fromCatReducer from "./category-reducer"

export interface RootReducerState{
    categories:fromCatReducer.CategoryReducerState;
}


export const rootReducer : ActionReducerMap<RootReducerState> = {
    categories : fromCatReducer.categoryReducer
}

export const getCategoriesState = (state: RootReducerState) => state.categories;

export const getCatLoading  = createSelector(getCategoriesState, fromCatReducer.getLoading);
export const getCatLoaded   = createSelector(getCategoriesState, fromCatReducer.getLoaded); 
export const getCats  = createSelector(getCategoriesState, fromCatReducer.getCategories); 
export const getCatsError  = createSelector(getCategoriesState, fromCatReducer.getCatError); 