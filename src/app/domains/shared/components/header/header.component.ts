import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  openSideCard() {
    const sideCard = document.querySelector('#sideCard')
    sideCard?.classList.remove('translate-x-full')
  }

  closeSideCard() {
    const sideCard = document.querySelector('#sideCard')
    sideCard?.classList.add('translate-x-full')
  }



}
