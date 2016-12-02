import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.module";
import { ProductsSearchComponent } from "./products-search/products-search.module";
import { SearchByNameComponent } from "./search-by-name/search-by-name.module";

const appRoutes: Routes = [
  { // default path
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'products-search',
    component: ProductsSearchComponent
  },
  {
    path: 'search-by-name',
    component: SearchByNameComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
