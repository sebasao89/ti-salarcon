import { Component, Input, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({required: true}) duration: number = 0
  @Input({required: true}) message: string = ""

  constructor() {
    // NO ASYNC
    // BEFORE RENDER
    console.log('Constructor counter')
    console.log(this.duration)
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChange) {
    // BEFORE AND DURING RENDER
    console.log('ngOnChanges')
    console.log(this.message)
    console.log(changes)
    console.log('-'.repeat(10))
  }

}
