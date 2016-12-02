import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";

import {ProductDetailsComponent} from './product-details.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  exports: [
    BrowserModule,
    ProductDetailsComponent
  ],
  declarations: [ProductDetailsComponent]
})
export class ProductDetailsModule {
}

export {
  ProductDetailsComponent
}
