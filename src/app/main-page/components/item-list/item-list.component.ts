import { Component, Input } from '@angular/core';
import { StateService } from '../bot-album/state-Service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  constructor(private service: StateService) {}
  isSelected: boolean = false;
  @Input() id: number = -1;
  selected() {
    this.service.getId().subscribe((id) => {
      if (this.id === id) {
        this.isSelected = true;
      } else {
        this.isSelected = false;
      }
    });
  }
}
