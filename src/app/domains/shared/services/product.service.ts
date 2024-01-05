import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)

  getProducts() {
    return this.http.get<Product[]>('https://nxfupneyqryumeegdhoe.supabase.co/rest/v1/products?select=*')
  }
}
