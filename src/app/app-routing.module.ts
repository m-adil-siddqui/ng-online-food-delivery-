import { CategoryComponent } from './backend/components/categories/index/category.component';
import { DashboardComponent } from './backend/components/dashboard/dashboard.component';
import { AdminLayoutComponent } from './backend/components/layout/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'admin',
    component:AdminLayoutComponent,
    children:[
      {path:'', component:DashboardComponent},
      {path:'category', component:CategoryComponent,}
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
