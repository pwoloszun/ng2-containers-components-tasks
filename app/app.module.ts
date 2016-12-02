import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { DashboardModule } from "./dashboard/dashboard.module";
import { ProductsSearchModule } from "./products-search/products-search.module";
import { SearchByNameModule } from "./search-by-name/search-by-name.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DashboardModule,
    ProductsSearchModule,
    SearchByNameModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
