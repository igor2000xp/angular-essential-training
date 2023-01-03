import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[mwFocus]'
})

export class FocusOnElementDirective implements OnInit {

  constructor(private el: ElementRef) {
  }
  ngOnInit(): void {
    this.el.nativeElement.focus();
  }
}
