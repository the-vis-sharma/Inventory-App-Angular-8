import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  products: ProductDetails[];

  constructor( public productService : ProductsService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      console.log("data", this.products);
    });
  }

}
