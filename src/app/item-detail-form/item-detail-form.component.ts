import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

import { ProductDetails } from '../product-details'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-item-detail-form',
  templateUrl: './item-detail-form.component.html',
  styleUrls: ['./item-detail-form.component.css']
})
export class ItemDetailFormComponent implements OnInit {

  public product : ProductDetails;
  public addItemForm : FormGroup;
  public isUpdate : boolean;
  public productId : number;
  categories: Array<string>;

  visible = true;
  selectable = false;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: Tag[] = [];

  constructor(private productService : ProductsService, private route : ActivatedRoute, 
    private snackBar: MatSnackBar, private router : Router) {
    this.categories = productService.getCategories();
    this.isUpdate = (this.route.snapshot.params.opr == "update") ? true : false;
    if(this.isUpdate) {
      this.productId = this.route.snapshot.params.productId;
      console.log(this.productId);
      this.productService.getProductById(this.productId).subscribe(data => {
        this.product = data;
        this.tags = data.tags;
      });
    }
    else {
      this.product = { name: "",
        category: "",
        availableUnits: 0,
        unitPrice: 0,
        tags: [],
        description: ""
      };
    }
   }
 
  ngOnInit() {
    this.addItemForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("[a-zA-Z0-9]+[a-zA-Z\ 0-9,\(\)]*")]),
      category: new FormControl('', [Validators.required]),
      availableUnits: new FormControl('', [Validators.required, Validators.min(0), Validators.max(50000), Validators.pattern("^[0-9]+$")]),
      unitPrice: new FormControl('', [Validators.required, Validators.min(0), Validators.pattern("^[0-9]+$")]),
      tags: new FormControl(''),
      description: new FormControl('', [Validators.maxLength(500)])
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  onSubmit(data) {
    console.log("form data", data);
    data.tags = this.tags;
    if(this.isUpdate) {
      this.updateProduct(data);
    }
    else {
      this.addProduct(data);
    }
  }

  addProduct(data : ProductDetails) {
    this.productService.addProduct(data).subscribe(res => { 
      console.log("add response", res);
      this.tags = [];
      this.addItemForm.markAsUntouched();
      this.addItemForm.markAsPristine();
      this.addItemForm.reset();
      this.snackBar.open("Product Added.", "Show", {
        duration: 3000,
      }).onAction().subscribe(() => {
        console.log("action clicked");
        this.router.navigate(['']);
      });;
    });
  }

  updateProduct(data : ProductDetails) {
    this.productService.updateProduct(this.productId, data).subscribe(res => { 
      console.log("update response", res);
      this.snackBar.open("Product Details has been updated.", "Show", {
        duration: 3000,
      }).onAction().subscribe(() => {
        console.log("action clicked");
        this.router.navigate(['']);
      });;
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.addItemForm.controls[controlName].hasError(errorName);
  }

}
