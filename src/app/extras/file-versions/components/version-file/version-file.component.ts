import { Component, Input } from '@angular/core';
import { StateVersionsService } from '../../services/state-versions.service';

@Component({
  selector: 'app-version-file',
  templateUrl: './version-file.component.html',
  styleUrls: ['./version-file.component.scss'],
})
export class VersionFileComponent {
  isSelected: boolean = false;
  @Input() id: number = -1;
  constructor(private versionService: StateVersionsService) {
    versionService.getId().subscribe((res) => {
      if (this.id === res) {
        this.isSelected = true;
      } else {
        this.isSelected = false;
      }
    });
  }
}
