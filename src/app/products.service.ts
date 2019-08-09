import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from './product-details';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "http://localhost:3000/products";

  constructor(private httpClient : HttpClient) { }

  addProduct(data) {
    console.log("internal data", data);
    return this.httpClient.post(this.url, data);
  }

  getProducts(): Observable<ProductDetails[]> {
    return this.httpClient.get<ProductDetails[]>(this.url);
  }


  deleteProduct(id) {
    console.log("in delete product ", this.url + "/" + id);
    return this.httpClient.delete(this.url + "/" + id);
  }
  
}
