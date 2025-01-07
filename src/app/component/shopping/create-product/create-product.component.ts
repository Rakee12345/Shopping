import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  public product:FormGroup = new FormGroup({
    name : new FormControl(),
    price : new FormControl(),
    rating : new FormControl(),
    image : new FormControl(),
  });
  constructor(private communicationservice:CommunicationService){}

  handleFileInput(event: any): void {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.product.patchValue({ image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  }
clickchild(){
    
    console.log(this.product.value);
    this.communicationservice.addProduct(this.product.value);
    // console.log(this.product);
    this.product.reset();
  }
}
