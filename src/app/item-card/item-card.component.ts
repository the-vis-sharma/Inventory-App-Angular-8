import { Component, OnInit, Input } from '@angular/core';
import { ProductDetails } from '../product-details';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() product: ProductDetails;

  constructor(public productService : ProductsService) { }

  ngOnInit() {
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(res => {
      console.log("Item is deleted", id);
    });
  }

}
