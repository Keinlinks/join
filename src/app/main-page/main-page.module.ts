import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { AlbumsMenuComponent } from './components/albums-menu/albums-menu.component';
import { LeftSectionComponent } from './sections/left-section/left-section.component';
import { RightSectionComponent } from './sections/right-section/right-section.component';
import { AlbumPageComponent } from './components/album-page/album-page.component';
import { TopAlbumComponent } from './components/top-album/top-album.component';
import { BotAlbumComponent } from './components/bot-album/bot-album.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { SongPopupModule } from '../extras/song-popup/song-popup.module';
import { MenuComponent } from './components/top-album/menu/menu.component';
import { AlbumPopupComponent } from '../extras/album-popup/album-popup.component';

@NgModule({
  declarations: [
    MainPageComponent,
    AlbumsMenuComponent,
    LeftSectionComponent,
    RightSectionComponent,
    AlbumPageComponent,
    TopAlbumComponent,
    BotAlbumComponent,
    ItemListComponent,
    MenuComponent,
  ],
  imports: [CommonModule, SongPopupModule, AlbumPopupComponent],
  exports: [MainPageComponent],
})
export class MainPageModule {}
