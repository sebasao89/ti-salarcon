import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from "../../../shared/components/counter/counter.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [CommonModule, CounterComponent]
})
export class AboutComponent {

  duration = signal(1000)
  message = signal('Hello')

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement
    this.duration.set(parseInt(input.value))
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement
    this.message.set(input.value)
  }

}
