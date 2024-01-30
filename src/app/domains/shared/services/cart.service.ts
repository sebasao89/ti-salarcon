import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  hideSideCart = signal(true)
  cart = signal<Product[]>([])
  
  total = computed( () => {
    const cart = this.cart()
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() { }

  toogleSideCart() {
    this.hideSideCart.update(prevState => !prevState)
  }

  addProduct(product: Product) {
    this.cart.update(state => [...state, product])
  }

}
