import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-no-found',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './no-found.component.html',
  styleUrl: './no-found.component.css'
})
export class NoFoundComponent {

}
