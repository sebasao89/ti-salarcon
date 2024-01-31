import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Product } from '../models/product.model';

import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)
  private productsUrl = 'https://nxfupneyqryumeegdhoe.supabase.co/rest/v1/products'
  headers = {
    apikey: environment.apikey,
    authorization: environment.authorization
  }

  getProducts(): Observable<Product[]> {

    const params = {
      select: '*'
    }
    return this.http.get<Product[]>(this.productsUrl, { headers: this.headers, params })
  }

  getOne(id: string) {
    const params = {
      id: `eq.${id}`
    }
    return this.http.get<Product>(this.productsUrl, { headers: this.headers, params })
  }

}
