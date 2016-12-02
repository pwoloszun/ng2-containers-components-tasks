import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { SearchByNameComponent } from './search-by-name.component';
import { ProductSearchBarModule } from "./product-search-bar/product-search-bar.module";

@NgModule({
  imports: [
    CommonModule,
    ProductSearchBarModule
  ],
  exports: [
    SearchByNameComponent
  ],
  declarations: [
    SearchByNameComponent
  ]
})
export class SearchByNameModule {
}

export {
  SearchByNameComponent
}
