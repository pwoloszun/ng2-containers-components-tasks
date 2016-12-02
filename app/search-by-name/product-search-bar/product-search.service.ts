import { Injectable } from '@angular/core';
import { Response, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { each, find, reduce, filter } from "@types/lodash";

import { SearchService } from "../search-bar/search-bar.module";

const productsUrl = "server/products.json";

@Injectable()
export class ProductSearchService implements SearchService<any> {

  constructor(private http: Http) {
  }

  search(query: string): Promise<any[]> {
    return new Promise(function (resolve) {
      resolve([]);// TODO
    });
  }

  private fetchItems<T>(url): Promise<T[]> {
    let promise = this.http.get(url)
    .toPromise()
    .then((response: Response) => {
      return <T[]>response.json();
    }, (error: any) => {
      console.error(error);
    });
    return promise;
  }
}
