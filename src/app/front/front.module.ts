import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FrontLayoutComponent } from './components/layout/front-layout/front-layout.component';
import { TopNavbarComponent } from './components/layout/top-navbar/top-navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    TopNavbarComponent,
    FooterComponent,
    FrontLayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FrontModule { }
