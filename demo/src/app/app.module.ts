import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailsComponent } from './icc/product-details.component';
import { ProductsListComponent } from './icc/products-list.component';
 
@NgModule({
  declarations: [
      ProductsListComponent, ProductDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductsListComponent]
})
export class AppModule { }
