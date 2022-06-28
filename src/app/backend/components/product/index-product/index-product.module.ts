import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexProductRoutingModule } from './index-product-routing.module';
import { IndexProductComponent } from './index-product.component';


@NgModule({
  declarations: [
    IndexProductComponent
  ],
  imports: [
    CommonModule,
    IndexProductRoutingModule
  ]
})
export class IndexProductModule { }
