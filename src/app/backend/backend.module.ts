import { AdminLayoutComponent } from './components/layout/admin-layout/admin-layout.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './components/categories/index/category.component';
import { CategoryDialogComponent } from './components/categories/dialog/category-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    CategoryComponent,
    CategoryDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,ReactiveFormsModule,MatSnackBarModule,MatTableModule,
    MatPaginatorModule, MatIconModule, MatMenuModule
  ]
})
export class BackendModule { }
