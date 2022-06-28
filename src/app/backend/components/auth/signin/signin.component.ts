import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setAuthenticateUser } from 'src/app/config/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loading:boolean = false;
  constructor(private _authService:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  submitForm(e:any) :void{
    this.loading = true;
    const user = {
      // full_name: e.control.value.full_name,
      email: e.control.value.email,
      password: e.control.value.password,
    }

    this._authService.login(user)
      .subscribe((res)=> {
        console.log(user)
        setAuthenticateUser(res)
        this._authService.checkedLogin();
        this._authService.isUserLoggedIn.subscribe((ststus:boolean) => {
          if(ststus){
            setTimeout(()=>{
              this._router.navigate(['/admin'])
              this.loading = false;
            }, 1000)
          }
        })
      });
  }

}
