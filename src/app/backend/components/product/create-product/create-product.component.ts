import { Component, OnInit, ViewChild } from '@angular/core';
import { FilePondOptions } from 'filepond';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms'
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  @ViewChild('pFiles') pFiles:any;
  loading  : boolean = false;
  submitted: boolean = false;
  error    : boolean = false;
  categories:any;

  constructor(private _productService: ProductService,
     private _categoryService: CategoryService, private _snackBar: MatSnackBar,
     private _formBuilder : FormBuilder
     ) { }

  pondOptions: FilePondOptions = {
    allowMultiple: true,
    allowProcess:false,
    labelIdle: 'Drop files here...'
  }

  pondFiles: FilePondOptions["files"] = []

  ngOnInit(): void {
    this.loadCategories();
    this.productForm = this._formBuilder.group({
      title       : ['', Validators.required],
      tagline     : ['', Validators.required],
      price       : ['', Validators.required],
      discount    : ['', Validators.required],
      details     : ['', Validators.required],
      category_id : ['', Validators.required]
    })
    console.log(this.f['title'])
  }

  get f(): { [key: string]: AbstractControl } {
    return this.productForm.controls;
  }

  productForm = new FormGroup({
    title       : new FormControl(null),
    tagline     : new FormControl(null),
    price       : new FormControl(null),
    discount    : new FormControl(null),
    details     : new FormControl(null),
    category_id : new FormControl(null)
  });

  onSubmit(){

    this.submitted = true;
    console.log(this.productForm.invalid)
    if (this.productForm.invalid) {
      return;
    }

    this.loading = true;
    const formDt = new FormData();
    formDt.append('title', this.productForm.value.title)
    formDt.append('tagline', this.productForm.value.tagline)
    formDt.append('price', this.productForm.value.price)
    formDt.append('discount', this.productForm.value.discount)
    formDt.append('details', this.productForm.value.details)
    formDt.append('category_id', this.productForm.value.category_id)
    for(let x in this.pFiles.getFiles()){
      formDt.append('files[]', this.pFiles.getFiles()[x].file)
    }
    this._productService.storeProduct(formDt).subscribe((res) => {
      setTimeout(()=> {
        this.loading = false;
        this._snackBar.open(res.message, 'Close', {
          duration: 5000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass : ['snackbar-color']
        });
      }, 1000)
      console.log(res)
      
    })
  }

  
  loadCategories(){
    const catObs$   =  this._categoryService.getCategories();
    const loading$  = catObs$[0];
    const catsList$ = catObs$[1];
    const error$    = catObs$[2];
    
    // loading$.subscribe(data => this.loading = data)
    error$.subscribe(data => this.error = data)
    
    catsList$.subscribe((res:any) => {
      if(res.length != 0){
        this.categories = res
        console.log(this.categories)

      }
    })
  }


  pondHandleInit() {
    // console.log('FilePond has initialised', this.pFiles);
  }

  pondHandleAddFile(event: any) {
    // console.log('A file was added');
  }

  pondHandleActivateFile(event: any) {
    // console.log('A file was activated')
  }

}
