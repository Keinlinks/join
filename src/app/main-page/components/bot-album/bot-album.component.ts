import { Component } from '@angular/core';
import { StateService } from './state-Service';

@Component({
  selector: 'app-bot-album',
  templateUrl: './bot-album.component.html',
  styleUrls: ['./bot-album.component.scss'],
})
export class BotAlbumComponent {
  popupComponent: boolean = false;
  constructor(private service: StateService) {}
  items: number[] = [1, 6, 3, 45, 6, 78, 45, 34, 65, 34, 45, 45, 4];
}
