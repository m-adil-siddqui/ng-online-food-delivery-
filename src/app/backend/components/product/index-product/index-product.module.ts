import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexProductRoutingModule } from './index-product-routing.module';
import { IndexProductComponent } from './index-product.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    IndexProductComponent
  ],
  imports: [
    CommonModule,
    IndexProductRoutingModule,
    MatTableModule,
    MatPaginatorModule, MatIconModule, MatMenuModule
  ]
})
export class IndexProductModule { }
