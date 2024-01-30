import { Component, Input, SimpleChange, SimpleChanges, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // @Input({required: true}) cart: Product[] = []

  private cartService = inject(CartService)

  hideSideCart = this.cartService.hideSideCart
  cart = this.cartService.cart
  totalPrice = this.cartService.total

  toogleSideCart() {
    this.cartService.toogleSideCart()
  }


}
