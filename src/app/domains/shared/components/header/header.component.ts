import { Component, Input, SimpleChange, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideCart = signal(true)
  @Input({required: true}) cart: Product[] = []
  totalPrice = signal(0)

  // openSideCart() {
  //   const sideCart = document.querySelector('#sideCart')
  //   sideCart?.classList.remove('translate-x-full')
  // }

  // closeSideCart() {
  //   const sideCart = document.querySelector('#sideCart')
  //   sideCart?.classList.add('translate-x-full')
  // }

  toogleSideCart() {
    this.hideSideCart.update(prevState => !prevState)
  }

  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart']
    if (cart) {
      this.totalPrice.set(this.calcPrice())
    }
  }

  calcPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }



}
