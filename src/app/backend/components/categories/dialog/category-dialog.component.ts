import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryDialogComponent implements OnInit {


  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  categoryForm!: FormGroup;
  constructor(private fb:FormBuilder, private _categorySer: CategoryService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.categoryForm =this.fb.group({
      "title"  : new FormControl('', [Validators.required]),
      "desc"   : new FormControl('', [Validators.required])
    });
  }
 

  get categoryFormControl(){
    return this.categoryForm.controls;
  }
  onSubmit(){
    // console.log(this.categoryForm.value)
    this._categorySer.storeCategory(this.categoryForm.value).subscribe(res => {
      console.log(res.message)
      this._snackBar.open(res.message, 'Close', {
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass : ['snackbar-color']
      });
    });
  }

}
