import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {ItemsComboBoxComponent} from './items-combo-box.component';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ItemsComboBoxComponent
  ],
  declarations: [ItemsComboBoxComponent]
})
export class ItemsComboBoxModule {
}

export {
  ItemsComboBoxComponent
}