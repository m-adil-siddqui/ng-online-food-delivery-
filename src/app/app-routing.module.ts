import { CategoryComponent } from './backend/components/categories/index/category.component';
import { DashboardComponent } from './backend/components/dashboard/dashboard.component';
import { AdminLayoutComponent } from './backend/components/layout/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateRouteGuard } from './guards/can-activate-route.guard';
import { GuestGuardRouteGuard } from './guards/guest-guard-route.guard';
import { CreateProductComponent } from './backend/components/product/create-product/create-product.component';


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
      {path:'category', component:CategoryComponent},
      {
        path:'products',
        canActivate:[CanActivateRouteGuard],
        loadChildren: () => import(`./backend/components/product/index-product/index-product.module`).then(m => m.IndexProductModule)
      },
      {
        path:'create-product',
        canActivate:[CanActivateRouteGuard],
        component: CreateProductComponent
        // loadChildren: () => import(`./backend/components/product/create-product/create-product.module`).then(m => m.CreateProductModule)
      },
      {
        path:'edit-product',
        canActivate:[CanActivateRouteGuard],
        loadChildren: () => import(`./backend/components/product/edit-product/edit-product.module`).then(m => m.EditProductModule)
      }
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
