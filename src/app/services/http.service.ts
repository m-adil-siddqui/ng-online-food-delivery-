import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private baseUrl = `http://localhost:9100/api/`;
  private AUTH_TOKEN = 'token';

  constructor(private _http: HttpClient) { }

  post(url: string, data: any):Observable<any>{
    // const data = {params, headers: this.getAuthHeader()};
    return this._http.post(this.baseUrl+url, data);
  }


  get(url:string, params?: any):Observable<any>
  {
    const data = {params};
    return this._http.get(this.baseUrl + url, data).pipe(catchError(this.errorHandler.bind(this)));
  }

  delete(url:string, params?: any):Observable<any>
  {
    const data = {params};
    return this._http.delete(this.baseUrl + url, data).pipe(catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(response:any)
  {
    const error = response.error;
    const keys = Object.keys(error);
    let message = error[keys[0]];

    if(response.status == 401)
    {

    }

    if(error[keys[0]] instanceof Array)
    {
      message = error[keys[0]][0];
    }

    if(keys[0] == 'isTrusted')
    {
      //it will occure when internet connection is disconnected
    }else{
      message = keys[0] + ' : ' + message;
    }
    return throwError({messages:message, error});
  }


  // private getAuthHeader():{[header:string]:string | string[];}
  // {
  //   return {
  //     Authorization: `Bearer ${localStorage.getItem(this.AUTH_TOKEN)}`
  //   }
  // }
}
