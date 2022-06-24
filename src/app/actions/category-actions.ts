import { Category } from './../models/category';
export const CATEGORY_LIST_REQUEST  = "category list request";
export const CATEGORY_LIST_SUCCESS  = "category list success";
export const CATEGORY_DELETE        = "category delete";
export const CATEGORY_LIST_FAILED   = "category list failed";
export const CATEGORY_LIST_ERROR    = "category list error";


export class CategoryListRequestAction{
    readonly type = CATEGORY_LIST_REQUEST;
}


export class CategoryDeleteAction{
    readonly type = CATEGORY_DELETE;
    constructor(public payload?: {id:number}){
    }
}

export class CategoryListErrorAction{
    readonly type = CATEGORY_LIST_ERROR;
}

export class CategoryListSuccessAction{
    readonly type = CATEGORY_LIST_SUCCESS;
    constructor(public payload?: {data: Category[]}){
        // console.log(payload?.data)
    }
}


