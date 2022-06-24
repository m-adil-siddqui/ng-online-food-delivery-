import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinerService {

  private spinerSub = new BehaviorSubject<boolean>(false);
  constructor() { }

  spinerState(){
    return this.spinerSub.asObservable()
  }

  showSpiner(){
    this.spinerSub.next(true)
  }

  hideSpiner(){
    this.spinerSub.next(false)
  }
}
