import { SpinerService } from './services/spiner.service';
import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'online-food-delivery';

  constructor(private _router:Router, private _spinerSer:SpinerService) { }


  ngOnInit()
  {
    
    this._router.events.subscribe(
    event=>{
      if(event instanceof NavigationStart){
        console.log("navigation starts");
        this._spinerSer.showSpiner()
      }
      else if(event instanceof NavigationEnd){
        console.log("navigation ends");
        this._spinerSer.hideSpiner()
      }
    },
    error=>{
      this._spinerSer.hideSpiner()
      console.log(error);
    })
  }
  
}
