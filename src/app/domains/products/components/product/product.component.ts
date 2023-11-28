import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() img: string = ""
  @Input({required: true}) title: string = ""
  @Input() price: number = 0

  @Output() addToCard = new EventEmitter()
  
  addToCardHandler() {
    this.addToCard.emit('Hola mensaje desde component product' + this.title)
  }


}
