import { Action } from './../actions';
import { CATEGORY_LIST_ERROR, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_DELETE } from './../actions/category-actions';
import { Category } from './../models/category';

export interface CategoryReducerState{
    loading  : boolean,
    loaded   : boolean,
    error    : boolean,
    categories:Category[]
}

const initialState : CategoryReducerState = {
    loading: false,
    loaded : false,
    error  : false,
    categories: []
}

export function categoryReducer(state = initialState, action: Action):CategoryReducerState{
    switch(action.type){
        case CATEGORY_LIST_REQUEST:{
            return {...state, loading:true}
        }
        case CATEGORY_LIST_ERROR:{
            return {...state, error:true, loading: false}
        }
        case CATEGORY_LIST_SUCCESS:{
            const updatedData = state.categories.concat(action.payload.data);
            return {...state, loaded:true, loading:false, categories:updatedData, error:false}
        }
        case CATEGORY_DELETE:{
            const categories = state.categories.filter((cat:any) =>{
                return cat._id !== action.payload.id;
            });
            return {...state, ...{categories}}
        }
        default:{
            return state
        }
    }
}


//SELECTORs

//these selectors are use in index reducer and selectors those are define in 
//index reducer are used in components
export const getLoading = (state: CategoryReducerState) => state.loading
export const getLoaded = (state: CategoryReducerState) => state.loaded
export const getCategories = (state: CategoryReducerState) => state.categories
export const getCatError = (state: CategoryReducerState) => state.error






