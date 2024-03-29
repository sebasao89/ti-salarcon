import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  // @Input() img: string = ""
  // @Input({required: true}) title: string = ""
  // @Input() price: number = 0

  @Input({required: true}) product!: Product

  @Output() addToCard = new EventEmitter()
  
  addToCardHandler() {
    this.addToCard.emit(this.product)
  }


}
