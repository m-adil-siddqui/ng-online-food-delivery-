import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule
  ]
})

export class SigninModule { }
