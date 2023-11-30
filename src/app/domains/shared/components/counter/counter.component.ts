import { Component, Input, SimpleChanges } from '@angular/core';
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
    console.log('-'.repeat(20))
  }

  ngOnChanges(changes: SimpleChanges) {
    // BEFORE AND DURING RENDER
    console.log('ngOnChanges')
    console.log(this.message)
    console.log(changes)
    console.log('-'.repeat(20))

    const duration = changes["duration"]
    if (duration) {
      this.doSomethig()
    }
  }

  ngOnInit() {
    // AFTER RENDER
    // UNA VEZ - ASYNC, THEN, Subscriber
    console.log('ngOnInit')
    console.log('Duration =>', this.duration)
    console.log('Message =>', this.message)
    console.log('-'.repeat(20))
  }

  ngAfterViewInit() {
    // AFTER RENDER
    // ONCE THE VIEW IS INITIALIZED
    console.log('ngAfterViewInit')
    console.log('-'.repeat(20))
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
    console.log('-'.repeat(20))
  }

  doSomethig() {
    alert('Change duration')
  }


}
