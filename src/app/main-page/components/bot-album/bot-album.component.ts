import { Component } from '@angular/core';
import { StateService } from './state-Service';

@Component({
  selector: 'app-bot-album',
  templateUrl: './bot-album.component.html',
  styleUrls: ['./bot-album.component.scss'],
})
export class BotAlbumComponent {
  popupComponent: boolean = false;
  fileIdSelected: number = -1;
  constructor(private service: StateService) {}
  items: number[] = [
    1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 7, 5, 3, 4, 5, 4, 3, 4, 5, 4, 3, 5, 4,
  ];
  selected(id: number) {
    this.service.emit(id);
    this.fileIdSelected = id;
  }
  arrow(tecla: KeyboardEvent) {
    if (tecla.code === 'ArrowUp') {
      this.fileIdSelected = this.fileIdSelected - 1;
      this.service.emit(this.fileIdSelected);
    }
    if (tecla.code === 'ArrowDown') {
      this.fileIdSelected = this.fileIdSelected + 1;
      this.service.emit(this.fileIdSelected);
    }
  }
}
