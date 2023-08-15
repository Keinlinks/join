import { Component } from '@angular/core';
import { StateVersionsService } from './services/state-versions.service';

@Component({
  selector: 'app-file-versions',
  templateUrl: './file-versions.component.html',
  styleUrls: ['./file-versions.component.scss'],
})
export class FileVersionsComponent {
  constructor(private service: StateVersionsService) {}

  selected(id: number) {
    this.service.emit(id);
  }
}
