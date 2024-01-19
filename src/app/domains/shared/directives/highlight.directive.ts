import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[Highlight]',
  standalone: true
})
export class HighlightDirective {

  element = inject(ElementRef)

  constructor() { }

}
