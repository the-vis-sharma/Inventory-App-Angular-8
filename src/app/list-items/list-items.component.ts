import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  allProducts: ProductDetails[];
  products: ProductDetails[];
  categories: Array<String>;
  sortBy: Array<String>;

  constructor( public productService : ProductsService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.allProducts = data;
      this.products = [...data];
      console.log("data", this.products);
    });

    this.categories = this.productService.getCategories();
    this.sortBy = this.productService.getSortBy();
  }

  searchProduct(query: string) {
    query = query.toLowerCase();
    this.products = this.allProducts.filter((product) => {
      // console.log(product);
      return product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query) 
               || product.description.toLowerCase().includes(query);
    });
  }

  filterByCategory(event) {
      // console.log(event);
      if(event.value == "All Categories") {
        this.products = [...this.allProducts];
      }
      else {
        this.products = this.allProducts.filter(product => product.category == event.value);
      }
  }

  sortProducts(event) {
    // console.log(event);
    if(event.value=="Price ▲") {
      this.sortByPrice();
    }
    else if(event.value=="Price ▼") {
      this.sortByPrice();
      this.products.reverse();
    }
    else if(event.value == "Available Units ▲") {
      this.sortByAvailableUnits();
    }
    else if(event.value == "Available Units ▼") {
      this.sortByAvailableUnits();
      this.products.reverse();
    }
    else if(event.value == "Name ▲") {
      this.sortByName();
    }
    else if(event.value == "Name ▼") {
      this.sortByName();
      this.products.reverse();
    }
    else if(event.value == "Category ▲") {
      this.sortByCategory();
    }
    else if(event.value == "Category ▼") {
      this.sortByCategory();
      this.products.reverse();
    }
    
  }

  sortByPrice() {
    this.products.sort((a,b) => a.unitPrice - b.unitPrice);
  }

  sortByAvailableUnits() {
    this.products.sort((a,b) => a.availableUnits - b.availableUnits);
  }

  sortByName() {
    this.products.sort((a,b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if(nameA < nameB) {
        return -1;
      }
      else if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  sortByCategory() {
    this.products.sort((a,b) => {
      let nameA = a.category.toLowerCase();
      let nameB = b.category.toLowerCase();
      if(nameA < nameB) {
        return -1;
      }
      else if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

}
