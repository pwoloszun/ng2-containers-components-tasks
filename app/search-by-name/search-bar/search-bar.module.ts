import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { SearchService } from "./search.service";
import { SearchBarComponent } from './search-bar.component';

@NgModule({
  imports: [CommonModule],
  exports: [SearchBarComponent],
  declarations: [SearchBarComponent]
})
export class SearchBarModule {
}

export {
  SearchService
}
