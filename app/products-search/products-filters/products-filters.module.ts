import {NgModule} from '@angular/core';

import {ProductsFilterComponent} from './products-filters.component';
import {ItemsComboBoxModule} from "./items-combo-box/items-combo-box.module";

@NgModule({
  imports: [
    ItemsComboBoxModule
  ],
  exports: [
    ProductsFilterComponent
  ],
  declarations: [
    ProductsFilterComponent
  ]
})
export class ProductsFilterModule {
}

export {
  ProductsFilterComponent
}