import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { ProductsSearchComponent } from './products-search.component';
import { ProductDetailsModule } from "./product-details/product-details.module";
import { ProductsFilterModule } from "./products-filters/products-filters.module";
import { ItemsRepositoryService } from "./services/items-repository.service";

@NgModule({
  imports: [
    HttpModule,
    ProductDetailsModule,
    ProductsFilterModule
  ],
  exports: [
    ProductsSearchComponent
  ],
  declarations: [
    ProductsSearchComponent
  ],
  providers: [
    ItemsRepositoryService,
    // ProductFiltersService
  ]
})
export class ProductsSearchModule {
}

export {
  ProductsSearchComponent
}
