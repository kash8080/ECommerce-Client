import { Injectable } from '@angular/core';
import { Category } from './Models/category';
import { Product } from './Models/Product';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  baseUrl="https://ecomm-rahul.herokuapp.com/";
  //baseUrl="localhost/4000/";

  categoriesUrl = this.baseUrl+'api/categories';
  productsUrl = this.baseUrl+'api/products/';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<{"data":Category[]}>(this.categoriesUrl);
  }

  getProducts(id:string) {
    /*
    //to add headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'category': id
      })
    };
    return this.http.get<{"data":Product[]}>(this.productsUrl,httpOptions);
    */
    return this.http.get<{"data":Product[]}>(this.productsUrl+id);
  }
}
