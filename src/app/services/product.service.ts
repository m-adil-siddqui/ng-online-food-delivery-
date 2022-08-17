import { CategoryDeleteAction, CategoryListErrorAction, CategoryListSuccessAction } from '../actions/category-actions';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, take } from 'rxjs';
import { Category } from '../models/category';
import { Store } from '@ngrx/store';
import { getProductError, getProductLoaded, getProductLoading, getProducts, RootReducerState } from '../reducers';
import { ProductListErrorAction, ProductListRequestAction, ProductListSuccessAction } from '../actions/product-actions';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private _store:Store<RootReducerState>, private _httpService: HttpService) { }

  storeProduct(data:any):Observable<any>{
    return this._httpService.post(`product`, data);
  }


  listOfProduct(force = false):[Observable<boolean>, Observable<boolean>, Observable<Product[]>]{
    const $loading = this._store.select(getProductLoading);
    const $loaded  = this._store.select(getProductLoaded);
    const $error   = this._store.select(getProductError)
    const $products   = this._store.select(getProducts)

    combineLatest([$loaded, $loading]).pipe(take(1)).subscribe((res)=>{

      if((!res[0] && !res[1]) || force){
        this._store.dispatch(new ProductListRequestAction())
        this._httpService.get(`product`).subscribe((api_data) => {
          console.log(api_data)
          this._store.dispatch(new ProductListSuccessAction({data:api_data.products}))
        }, error => {
          this._store.dispatch(new ProductListErrorAction())
        })
        
      }
    })

    return [$loading, $error, $products];

  }

 
}
