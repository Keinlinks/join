import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileVersionsComponent } from './file-versions.component';
import { VersionFileComponent } from './components/version-file/version-file.component';

@NgModule({
  declarations: [FileVersionsComponent, VersionFileComponent],
  imports: [CommonModule],
  exports: [FileVersionsComponent],
})
export class FileVersionsModule {}
