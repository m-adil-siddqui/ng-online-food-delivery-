import { CategoryDeleteAction, CategoryListErrorAction, CategoryListSuccessAction } from '../actions/category-actions';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private _httpService: HttpService) { }

  storeProduct(data:any):Observable<any>{
    return this._httpService.post(`product`, data);
  }


  listOfProduct():Observable<any>{
    return this._httpService.get(`product`);
  }

 
}
