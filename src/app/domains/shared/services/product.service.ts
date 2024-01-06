import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Product } from '../models/product.model';

import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)
  apiKey = environment.apiKey

  getProducts(): Observable<Product[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'apikey': this.apiKey // Asegúrate de usar el nombre del encabezado correcto para tu token de Supabase
      })
    };

    const productsUrl = `${environment.supabaseUrl}/products?select=*`;
    return this.http.get<Product[]>(productsUrl, httpOptions);
  }
}
