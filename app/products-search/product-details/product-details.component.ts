import {Component, OnInit, Input} from '@angular/core';

import {Product} from "../models/product";

@Component({
  moduleId: module.id,
  selector: 'ps-product-details',
  templateUrl: 'product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}