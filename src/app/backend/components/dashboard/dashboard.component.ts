import { Component, OnInit } from '@angular/core';
import { getAuthenticateUser } from 'src/app/config/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  _authenticateUser = getAuthenticateUser();

  constructor() { }

  ngOnInit(): void {
    console.log(this._authenticateUser.full_name)

  }

}
