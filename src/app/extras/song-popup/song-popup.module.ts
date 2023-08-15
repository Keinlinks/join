import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongPopupComponent } from './song-popup.component';
import { TriggerButtonModule } from '../trigger-button/trigger-button.module';
import { FileVersionsModule } from '../file-versions/file-versions.module';

@NgModule({
  declarations: [SongPopupComponent],
  imports: [CommonModule, TriggerButtonModule, FileVersionsModule],
  exports: [SongPopupComponent],
})
export class SongPopupModule {}
