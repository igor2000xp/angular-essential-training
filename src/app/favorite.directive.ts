import { Directive, HostBinding, HostListener, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[mwFavorite]',
})

export class FavoriteDirective {
  @HostBinding('class.is-favorite')
  isFavorite = true;
  // @HostBinding('class.is-favorite-hovering') hover = false;

  @Input()
  set mwFavorite(value) {
    this.isFavorite = value;
  }

  constructor(private render: Renderer2, private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    // this.hover = true;
    this.render.addClass(this.el.nativeElement, 'is-favorite-hovering');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    // this.hover = false;
    this.render.removeClass(this.el.nativeElement, 'is-favorite-hovering');
  }

}
