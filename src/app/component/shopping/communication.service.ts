import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  name: string;
  price: number;
  rating: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private productsData = new BehaviorSubject<Product[]>([]);
  private selectedProduct = new BehaviorSubject<Product | null>(null);


  productsData$ = this.productsData.asObservable();

  selectedProduct$ = this.selectedProduct.asObservable();

  addProduct(product: Product) {
    this.productsData.next([...this.productsData.value, product]);
    console.log("serv",this.productsData.value);
  }

  // getProducts(): Product[] {
  //   return this.productList;
  // }

  selectProduct(product: Product) {
    this.selectedProduct.next(product);
  }
}
