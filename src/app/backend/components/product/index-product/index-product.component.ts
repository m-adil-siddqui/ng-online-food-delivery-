import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.css']
})
export class IndexProductComponent implements OnInit {

  productData: [] = [];
  error   : boolean = false;
  loading : boolean = false;
  
  displayedColumns: string[] = ['title', 'category', 'price', 'actions'];
  dataSource = new MatTableDataSource<any>(this.productData);
 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _productService: ProductService,
     public dialog: MatDialog) { }

  ngOnInit(): void {
    this._productService.listOfProduct().subscribe((res:any) => {
      console.log(res)
      this.dataSource.data = res.products
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
