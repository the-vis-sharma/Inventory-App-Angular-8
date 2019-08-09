import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail-form',
  templateUrl: './item-detail-form.component.html',
  styleUrls: ['./item-detail-form.component.css']
})
export class ItemDetailFormComponent implements OnInit {

  public addItemForm : FormGroup;
  public isUpdate : boolean;
  categories: Array<string> = ["Mens", "Women", "Childern"];
  constructor(private productService : ProductsService, private route : ActivatedRoute ) {
    console.log("u", this.route.snapshot.params.opr);
    this.isUpdate = (this.route.snapshot.params.opr == "update") ? true : false;
    console.log("update:", this.isUpdate);
   }
 
  ngOnInit() {
    this.addItemForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("[a-zA-Z0-9]+[a-zA-Z\ 0-9]*")]),
      category: new FormControl('', [Validators.required]),
      availableUnits: new FormControl('', [Validators.required, Validators.min(0), Validators.max(50000), Validators.pattern("^[0-9]+$")]),
      unitPrice: new FormControl('', [Validators.required, Validators.min(0), Validators.pattern("^[0-9]+$")]),
      tags: new FormControl(''),
      description: new FormControl('', [Validators.maxLength(500)])
    });
  }

  addProduct(data) {
    console.log("form data", data);
    this.productService.addProduct(data).subscribe(res => { 
      console.log("response", res);
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.addItemForm.controls[controlName].hasError(errorName);
  }

}
