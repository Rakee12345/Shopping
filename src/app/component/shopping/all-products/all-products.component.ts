import { Component } from '@angular/core';
import { CommunicationService, Product } from '../communication.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  products:Product[] = [];
constructor(private communicationservice:CommunicationService){}
 ngOnInit(): void{
  this.communicationservice.productsData$.subscribe(
    data =>
       this.products = data
  )}


  view(product: Product): void{
    this.communicationservice.selectProduct(product)
  }
  }
  
  

  //Method to send data to the parent component
 
  


