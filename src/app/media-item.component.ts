import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMediaItem } from './media-item-list.component';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input()
  mediaItem: IMediaItem;

  @Output()
  delete = new EventEmitter<IMediaItem>();

  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}
