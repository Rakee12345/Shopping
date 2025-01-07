import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './component/shopping/shopping.component';
import { CreateProductComponent } from './component/shopping/create-product/create-product.component';
import { OperationsComponent } from './component/shopping/operations/operations.component';
import { AllProductsComponent } from './component/shopping/all-products/all-products.component';
import { ViewProductComponent } from './component/shopping/view-product/view-product.component';
import { RatingComponent } from './component/shopping/rating/rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    CreateProductComponent,
    OperationsComponent,
    AllProductsComponent,
    ViewProductComponent,
    RatingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
