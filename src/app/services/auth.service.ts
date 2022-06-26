import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpService:HttpService) { }

  register(data: any){
    this._httpService.post(`auth/register`, data);
  }
}
