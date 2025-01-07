import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {


  constructor(private com:CommunicationService) { }
  product: any = {};
  ngOnInit(): void {
    this.com.selectedProduct$.subscribe((data: any) => {
      this.product = data;
    });
  }

}
