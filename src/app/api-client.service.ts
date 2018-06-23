import { Injectable } from '@angular/core';
import { Category } from './Models/category';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  configUrl = 'https://ecomm-rahul.herokuapp.com/api/categories';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<{"data":Category[]}>(this.configUrl);
  }
}
