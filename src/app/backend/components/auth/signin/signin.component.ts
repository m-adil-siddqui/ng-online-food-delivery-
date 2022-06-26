import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(e:any){
    const user = {
      full_name: e.control.value.full_name,
      email: e.control.value.email,
      password: e.control.value.password,
    }
    console.log(user)

  }

}
