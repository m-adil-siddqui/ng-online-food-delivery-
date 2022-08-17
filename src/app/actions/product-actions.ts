import { Product } from "../models/product";

export const PRODUCT_LIST_REQUEST = 'product list request';
export const PRODUCT_LIST_SUCCESS = 'product list success';
export const PRODUCT_LIST_ERROR = 'product list error';
export const PRODUCT_LIST_FAILDED = 'product list failed';
// export const PRODUCT_DELETE = 'product  delete';


export class ProductListRequestAction{
    readonly type = PRODUCT_LIST_REQUEST;
}

export class ProductListSuccessAction{
    readonly type = PRODUCT_LIST_SUCCESS;
    constructor(public payload?: {data : Product[]}){
    }
}


export class ProductListErrorAction{
    readonly type = PRODUCT_LIST_ERROR;
}

// export class ProductDeleteAction{
//     readonly type = PRODUCT_DELETE;
//     constructor(public payload?:{id:number}){
//     }
// }

