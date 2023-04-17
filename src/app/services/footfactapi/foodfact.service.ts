import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ResponseProducts } from './model/response-products';

@Injectable({
  providedIn: 'root'
})
export class FoodfactService {

  baseUrl: string = "http://openfoodfacts.localhost";

  constructor(private http: HttpClient) { }

  getFoodsByName(name: string, page = 1) {
    let httpParams = new HttpParams()
    .set('brands_tags', name)
    .set('fields','code,product_name,image_front_small_url')
    .set('page',page);
    return this.http.get<ResponseProducts>(this.baseUrl + "/api/v2/search", {params: httpParams}).pipe(
      catchError(this.handleError)
    );
  }

  getFoodsByCode(code: number) {
    let httpParams = new HttpParams()
    .set('code',code);
    return this.http.get<ResponseProducts>(this.baseUrl + "/api/v2/search", {params: httpParams});
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
