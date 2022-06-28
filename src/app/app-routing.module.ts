import { CategoryComponent } from './backend/components/categories/index/category.component';
import { DashboardComponent } from './backend/components/dashboard/dashboard.component';
import { AdminLayoutComponent } from './backend/components/layout/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateRouteGuard } from './guards/can-activate-route.guard';
import { GuestGuardRouteGuard } from './guards/guest-guard-route.guard';


const routes: Routes = [
  {
    path:'login',
    canActivate:[GuestGuardRouteGuard],
    loadChildren: () => import(`./backend/components/auth/signin/signin.module`).then(m => m.SigninModule)
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
    canActivate:[CanActivateRouteGuard],
    children:[
      {path:'', component:DashboardComponent},
      {path:'category', component:CategoryComponent,}
    ]
  }
]


@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
