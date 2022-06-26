import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardRouteGuard implements CanActivate {
  constructor(private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const guest = localStorage.getItem('access_token') ? false: true;
      if(!guest){
        this.router.navigate(['/admin']);
        return false;
      }else{
        return true;
      }
  }
  
}
