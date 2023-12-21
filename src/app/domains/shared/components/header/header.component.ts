import { Component, Input, SimpleChange, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideCart = signal(true)
  // @Input({required: true}) cart: Product[] = []

  private cartService = inject(CartService)
  cart = this.cartService.cart
  totalPrice = this.cartService.total

   toogleSideCart() {
    this.hideSideCart.update(prevState => !prevState)
  }



  // ngOnChanges(changes: SimpleChanges) {
  //   const cart = changes['cart']
  //   if (cart) {
  //     this.totalPrice.set(this.calcPrice())
  //   }
  // }

  // calcPrice() {
  //   return this.cart.reduce((total, product) => total + product.price, 0);
  // }



}
