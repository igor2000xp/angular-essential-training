import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[mwFavorite]',
})

export class FavoriteDirective {
  @HostBinding('is-favorite') isFavorite = true;
}
