import { Injectable } from "@angular/core";
import { products } from 'src/app/products'
import { HttpClient } from '@angular/common/http'
import { Observable, Subscriber } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    // return products
    return this.http.get('http://192.168.11.32:4200/products')
  }

  getProductById(productId: number) {
    return products[productId]
  }
}
