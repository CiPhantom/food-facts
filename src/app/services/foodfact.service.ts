import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseProducts } from './model/response-products';


@Injectable({
  providedIn: 'root'
})
export class FoodfactService {

  baseUrl: string = "http://openfoodfacts.localhost";

  constructor(private http: HttpClient) { }

  getFoodsByName(name: string) {
    let httpParams = new HttpParams()
    .set('brands_tags', name)
    .set('fields','code,product_name,image_front_small_url');
    return this.http.get(this.baseUrl + "/api/v2/search", {params: httpParams});
  }
}
