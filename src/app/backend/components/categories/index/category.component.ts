import { Category } from './../../../../models/category';
import { SpinerService } from './../../../../services/spiner.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {MatDialog} from '@angular/material/dialog';
import { CategoryDialogComponent } from '../dialog/category-dialog.component';
import { CategoryService } from 'src/app/services/category.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryData: Category[] = [];
  error   : boolean = false;
  loading : boolean = false;
  
  displayedColumns: string[] = ['title', 'desc', 'created_at', 'actions'];
  dataSource = new MatTableDataSource<Category>(this.categoryData);
 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _categorySer: CategoryService,
     public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCategories();

    // this._spinerSer.spinerState().subscribe(res => {
    //   console.log(res)
    // })
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  loadCategories(){
    const catObs$   =  this._categorySer.getCategories();
    const loading$  = catObs$[0];
    const catsList$ = catObs$[1];
    const error$    = catObs$[2];
    
    
    loading$.subscribe(data => this.loading = data)
    error$.subscribe(data => this.error = data)
    
    catsList$.subscribe((res:any) => {
      if(res.length != 0){
        this.dataSource.data = res;
      }
    })

    // this._categorySer.getCategory().subscribe((res:any) => {
    //   console.log(res)
    //   this.dataSource.data = res.categories;
    // })
  }

  tryAgain(){
    this._categorySer.getCategories(true)
  }

  deleteCategory(id:number){
    this._categorySer.deleteCategory(id)
  }

  openDialog() {
    const dialogRef = this.dialog.open(CategoryDialogComponent,{
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

