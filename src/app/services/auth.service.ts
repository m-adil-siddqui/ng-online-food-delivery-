import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpService:HttpService) { }

  behaviorObj = new BehaviorSubject<boolean>(false);

  isUserLoggedIn = this.behaviorObj.asObservable()

  checkedLogin(){
    const token = localStorage.getItem("access_token");
    if(token){
      this.behaviorObj.next(true)
    }else{
      this.behaviorObj.next(false)
    }
  }


  register(data: any):Observable<any>{
    return this._httpService.post(`auth/register`, data);
  }

  login(data: any):Observable<any>{
    return this._httpService.post(`auth/login`, data);
  }

}