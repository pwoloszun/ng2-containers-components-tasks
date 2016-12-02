import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class ItemsRepositoryService {

  constructor(private _http: Http) {
  }

  getAllItems(url: string): Promise<Object[]> {
    return new Promise<Object[]>((resolve) => {
      this.getJson(url, (json: Object[]) => {
        resolve(json);
      });
    });
  }

  getItemById(url: string, id: number): Promise<Object> {
    return new Promise<Object>((resolve) => {
      this.getJson(url, (json: Object[]) => {
        let foundItem: Object = json.filter((item: any) => {
          return item.id === id;
        })[0];
        resolve(foundItem);
      });
    });
  }

  private getJson(url: string, callback: Function) {
    this._http.get(url).subscribe((response: Response) => {
      callback(response.json());
    });
  }
}
