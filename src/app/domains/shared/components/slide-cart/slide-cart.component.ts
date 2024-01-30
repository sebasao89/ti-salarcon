import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-slide-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slide-cart.component.html',
  styleUrl: './slide-cart.component.css'
})
export class SlideCartComponent {

  private cartService = inject(CartService)
  hideSideCart = this.cartService.hideSideCart
  cart = this.cartService.cart
  totalPrice = this.cartService.total

  toogleSideCart() {
    this.cartService.toogleSideCart()
  }
  
}
