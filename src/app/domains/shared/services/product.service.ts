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

  getProducts(): Observable<Product[]> {
    const headers = {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54ZnVwbmV5cXJ5dW1lZWdkaG9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NzM5NzUsImV4cCI6MjAyMDA0OTk3NX0.S1xch-67ER3CAsRQyvW4G3lSENA1ZKPFibwfb3lmI40',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54ZnVwbmV5cXJ5dW1lZWdkaG9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NzM5NzUsImV4cCI6MjAyMDA0OTk3NX0.S1xch-67ER3CAsRQyvW4G3lSENA1ZKPFibwfb3lmI40'
    };

    const params = {
        select: '*'
      }

    const productsUrl = `https://nxfupneyqryumeegdhoe.supabase.co/rest/v1/products`

    return this.http.get<Product[]>(productsUrl, { headers, params })
  }
}
