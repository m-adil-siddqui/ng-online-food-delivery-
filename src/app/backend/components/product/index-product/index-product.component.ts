import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
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
  dataSource = new MatTableDataSource<Product>(this.productData);
 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _productService: ProductService,
     public dialog: MatDialog) { }

  ngOnInit(): void {
    const productObs$ = this._productService.listOfProduct()

    const loading$  = productObs$[0]
    const error$   = productObs$[1]
    const products$ = productObs$[2]

    loading$.subscribe(data => this.loading = data)
    error$.subscribe(data => this.error = data)

    products$.subscribe((res:any) => {
      if(res.length != 0){
         this.dataSource.data = res
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
