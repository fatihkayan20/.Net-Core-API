import { Product } from 'src/app/models/product';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://localhost:44317/api/products';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + '/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + '/category/' + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product: Product): Observable<ResponseModel> {
    let url = this.apiUrl + '/add';
    return this.httpClient.post<ResponseModel>(url, product);
  }
}
