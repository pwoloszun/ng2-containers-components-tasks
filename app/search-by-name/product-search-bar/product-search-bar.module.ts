import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { ProductSearchBarComponent } from './product-search-bar.component';
import { SearchBarModule } from "../search-bar/search-bar.module";
import { ProductSearchService } from "./product-search.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SearchBarModule
  ],
  exports: [
    ProductSearchBarComponent
  ],
  declarations: [
    ProductSearchBarComponent
  ],
  providers: [
    ProductSearchService
  ]
})
export class ProductSearchBarModule {
}
