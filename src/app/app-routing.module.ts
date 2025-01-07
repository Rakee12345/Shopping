import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './component/shopping/shopping.component';
import { CreateProductComponent } from './component/shopping/create-product/create-product.component';
import { OperationsComponent } from './component/shopping/operations/operations.component';
import { AllProductsComponent } from './component/shopping/all-products/all-products.component';
import { ViewProductComponent } from './component/shopping/view-product/view-product.component';
import { RatingComponent } from './component/shopping/rating/rating.component';

const routes: Routes = [
  {path:'', component: ShoppingComponent},
  {path: 'shopping',component:ShoppingComponent,children:[
    {path:'create-product',component:CreateProductComponent},
    {path:'operations',component:OperationsComponent},
    {path:'all-products',component:AllProductsComponent},
    {path:'view-products',component:ViewProductComponent},
    {path:'rating',component:RatingComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
