import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { AlbumsMenuComponent } from './components/albums-menu/albums-menu.component';
import { LeftSectionComponent } from './sections/left-section/left-section.component';
import { RightSectionComponent } from './sections/right-section/right-section.component';

@NgModule({
  declarations: [MainPageComponent, AlbumsMenuComponent, LeftSectionComponent, RightSectionComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class MainPageModule {}
