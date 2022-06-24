import { CategoryDeleteAction, CategoryListErrorAction, CategoryListSuccessAction } from './../actions/category-actions';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Category } from '../models/category';
import { Store } from '@ngrx/store';
import { getCats, getCatLoaded, getCatLoading, RootReducerState, getCatsError } from '../reducers';
import { CategoryListRequestAction } from '../actions/category-actions';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private _store:Store<RootReducerState>, private _httpService: HttpService) { }

  storeCategory(data:Category):Observable<any>{
    return this._httpService.post(`category`, data);
  }

  getCategories(force = false):[Observable<boolean>, Observable<Category[]>, Observable<boolean>]{

    const loading$           = this._store.select(getCatLoading);
    const loaded$            = this._store.select(getCatLoaded);
    const getCategoriesData$ = this._store.select(getCats);
    const catError$          = this._store.select(getCatsError);

    combineLatest([loaded$, loading$]).pipe(take(1)).subscribe((res) => {

      if((!res[0] && !res[1]) || force){

        this._store.dispatch(new CategoryListRequestAction())
        this._httpService.get('category').subscribe(api_data => {
          this._store.dispatch(new CategoryListSuccessAction({data:api_data.categories}));
        }, error => {
          this._store.dispatch(new CategoryListErrorAction())
        })

      }
    })
  
   return [loading$, getCategoriesData$, catError$];
    // .pipe(map(data => data as Category[]));
  }

  getCategory(id:number = 1):Observable<Category>{
    return this._httpService.get(`category/${id}`);
  }

  deleteCategory(id:number){
    this._httpService.delete(`category/${id}`).subscribe((res:any) =>{
    this._store.dispatch(new CategoryDeleteAction({id:res.categoryId}))
      console.log(res)
    });
  }
 
}
