import {Product} from "./product";
import {Category} from "./category";
import {Manufacturer} from "./manufacturer";

export interface FiltersMap {
  categories: Category[];
  manufacturers: Manufacturer[];
  products: Product[]
}
