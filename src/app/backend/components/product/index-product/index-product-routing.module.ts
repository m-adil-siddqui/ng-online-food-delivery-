import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexProductComponent } from './index-product.component';

const routes: Routes = [
  {
    path: '',
    component:IndexProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexProductRoutingModule { }
