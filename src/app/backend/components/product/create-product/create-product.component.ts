import { Component, OnInit } from '@angular/core';
import { FilePondOptions } from 'filepond';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productForm = new FormGroup({
    title   : new FormControl(null),
    tagline : new FormControl(null),
    price    : new FormControl(null),
    discount : new FormControl(null),
    details : new FormControl(null),
  });

  onSubmit(){
    console.log(this.productForm.value)
  }

  pondOptions: FilePondOptions = {
    allowMultiple: true,
    allowProcess:false,
    labelIdle: 'Drop files here...'
  }

  pondFiles: FilePondOptions["files"] = [
    {
      source: 'assets/photo.jpeg',
      options: {
        type: 'local'
      }
    }
  ]

  pondHandleInit() {
    console.log('FilePond has initialised');
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event.getFile);
  }

  pondHandleActivateFile(event: any) {
    console.log('A file was activated', event)
  }

}
