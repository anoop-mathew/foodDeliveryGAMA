
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'environments/environment.ts';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  private parseResponse(obj) {
    return Object.keys(obj).map(key => obj[key]);
  }
  getfoodList() {
    return this.http.get('http://localhost:5300/inventory/')
      .pipe(map(r => this.parseResponse(r)))
  }
  getproducts(id) {
    let newUrl = 'http://localhost:5300/inventory/'+id+'/detail';
    return this.http.get(newUrl)
      .map((response: Response) => response);
  }

  getcategory() {
    return this.http.get('http://localhost:5300/category')
    .pipe(map(r => this.parseResponse(r)))
    }

    getfoodListByCategoy(cateName) {
      const url = 'http://localhost:5300/inventory/'+cateName+'/items'
      return this.http.get(url)
        .pipe(map(r => this.parseResponse(r)))
    }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}